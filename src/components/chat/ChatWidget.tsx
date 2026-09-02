"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  User,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const INITIAL_SUGGESTIONS = [
  "What are Naim's top projects?",
  "What is Naim's tech stack?",
  "How can I contact Naim?",
  "What services does Naim offer?",
];

const INITIAL_WELCOME_MESSAGE: Message = {
  id: "welcome-msg",
  role: "assistant",
  content:
    "Hi! 👋 I'm **Naim AI**, Naim Sorker's personal assistant. How can I help you today? Ask me about Naim's skills, projects, background, or contact details.",
  timestamp: new Date().toISOString(),
};

export default function ChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    INITIAL_WELCOME_MESSAGE,
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load chat history from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("naim_ai_chat_history");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to parse chat history:", e);
    }
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem("naim_ai_chat_history", JSON.stringify(messages));
      }
    } catch (e) {
      console.error("Failed to save chat history:", e);
    }
  }, [messages]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!textToSend) setInputMessage("");
    setIsLoading(true);

    const assistantMsgId = crypto.randomUUID();
    const assistantPlaceholderMessage: Message = {
      id: assistantMsgId,
      role: "assistant",
      content: "",
      timestamp: new Date().toISOString(),
    };

    // Add empty assistant placeholder for streaming tokens
    setMessages((prev) => [...prev, assistantPlaceholderMessage]);

    try {
      const historyForBackend = updatedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyForBackend,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || errorData.details || "Failed to connect",
        );
      }

      if (!res.body) {
        throw new Error("No response body received");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedContent += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? { ...msg, content: accumulatedContent }
              : msg,
          ),
        );
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Chat error:", error);
      toast.error("Failed to fetch response");
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMsgId
            ? {
                ...msg,
                content:
                  "⚠️ Sorry, I could not generate a response right now. Please check `GEMINI_API_KEY` configuration or try again.",
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Minimal inline Markdown Parser
  const renderFormattedContent = (content: string) => {
    if (!content) return null;
    const paragraphs = content.split(/\n\n+/);

    return paragraphs.map((paragraph, pIdx) => {
      const lines = paragraph.split("\n");

      return (
        <div key={pIdx} className="mb-2 last:mb-0 space-y-1">
          {lines.map((line, lIdx) => {
            const isBullet =
              line.trim().startsWith("- ") || line.trim().startsWith("* ");
            const lineText = isBullet ? line.trim().substring(2) : line;
            const parts = parseMarkdownInline(lineText);

            if (isBullet) {
              return (
                <div key={lIdx} className="flex items-start gap-2 ml-1">
                  <span className="text-primary font-bold text-sm select-none mt-0.5">
                    •
                  </span>
                  <div className="flex-1">{parts}</div>
                </div>
              );
            }

            return (
              <p key={lIdx} className="leading-relaxed">
                {parts}
              </p>
            );
          })}
        </div>
      );
    });
  };

  const parseMarkdownInline = (text: string) => {
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("[") && part.includes("](")) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, linkText, url] = match;
          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-primary underline underline-offset-4 hover:opacity-80 font-medium"
            >
              {linkText}
              <ExternalLink className="h-3 w-3 inline" />
            </a>
          );
        }
      }
      return part;
    });
  };

  return (
    <>
      {/* Backdrop overlay when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
          />
        )}
      </AnimatePresence>

      {/* Clean Right Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[450px] md:w-[480px] h-full shadow-2xl bg-background/95 backdrop-blur-2xl border-l border-border/50 flex flex-col overflow-hidden"
          >
            {/* Minimal Header */}
            <div className="p-4 px-5 border-b border-border/40 bg-muted/20 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-background" />
                </div>

                <div>
                  <h2 className="font-bold text-base text-foreground tracking-tight leading-none">
                    Naim AI
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Portfolio & Engineering Assistant
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Body */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm custom-scrollbar"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                    </div>
                  )}

                  <div className="group relative max-w-[85%] sm:max-w-[80%]">
                    <div
                      className={`p-3.5 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-xs shadow-xs font-medium"
                          : "bg-muted/50 dark:bg-zinc-900/60 border border-border/40 text-foreground rounded-bl-xs"
                      }`}
                    >
                      {msg.content ? (
                        renderFormattedContent(msg.content)
                      ) : (
                        <div className="flex items-center gap-1 py-1">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                        </div>
                      )}
                    </div>

                    {msg.role === "assistant" && msg.content && (
                      <div className="flex items-center gap-3 mt-1 px-1">
                        <button
                          onClick={() => handleCopyMessage(msg.id, msg.content)}
                          className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-500" />
                              <span className="text-emerald-500 font-medium">
                                Copied
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                        <span className="text-[10px] text-muted-foreground/60">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    )}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0 mt-0.5 text-primary-foreground">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Clean Quick Suggestion Chips */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-3 bg-muted/20 border-t border-border/30 shrink-0">
                <p className="text-[11px] font-semibold text-muted-foreground mb-2">
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {INITIAL_SUGGESTIONS.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs bg-background hover:bg-muted border border-border/50 text-foreground px-3 py-1.5 rounded-lg transition-colors text-left"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3.5 px-4 bg-background border-t border-border/40 flex gap-2 items-center shrink-0"
            >
              <Input
                ref={inputRef}
                placeholder="Ask anything about Naim Sorker..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-muted/40 focus-visible:ring-primary h-10 text-xs sm:text-sm rounded-xl px-3.5"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputMessage.trim()}
                className="h-10 w-10 shrink-0 rounded-xl"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button (ONLY shown when drawer is closed to prevent overlap) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 h-12 px-4 rounded-full bg-primary text-primary-foreground flex items-center gap-2 shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-200"
            aria-label="Open Naim AI Chat"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <MessageSquare className="h-4 w-4" />
            <span className="font-semibold text-xs sm:text-sm">Naim AI</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

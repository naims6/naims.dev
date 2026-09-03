"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  User,
  Copy,
  Check,
  ExternalLink,
  Bot,
  MessageSquare,
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
    "Hi! 👋 How can I help you today? Ask me about Naim's skills, projects, background, or contact details.",
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

  // Load chat history from DB on mount
  useEffect(() => {
    let sessionId = localStorage.getItem("naim_ai_session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("naim_ai_session_id", sessionId);
    }

    fetch(`/api/chat/${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.messages && data.messages.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const formatted = data.messages.map((m: any) => ({
            id: m._id || crypto.randomUUID(),
            role: m.role === "ai" ? "assistant" : "user",
            content: m.content,
            timestamp: m.createdAt || new Date().toISOString(),
          }));
          setMessages(formatted);
        } else {
          setMessages([INITIAL_WELCOME_MESSAGE]);
        }
      })
      .catch((e) => console.error("Failed to load chat history:", e))
  }, []);

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

    try {
      // Only send last 6 messages — reduces payload size
      const historyForBackend = updatedMessages.slice(-6).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const sessionId = localStorage.getItem("naim_ai_session_id");
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyForBackend,
          sessionId: sessionId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || data.details || "Failed to get AI response",
        );
      }

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply || "Sorry, I couldn't generate a response.",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Chat error:", error);
      toast.error(error.message || "Failed to connect");
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "⚠️ I ran into an error generating a response. Please try again.",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
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

  // Minimal Markdown Parser
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
                  <span className="text-blue-500 font-bold text-sm select-none mt-0.5">
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
              className="inline-flex items-center gap-0.5 text-blue-500 underline underline-offset-4 hover:opacity-80 font-medium"
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
      {/* Backdrop overlay — active on all screen sizes */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Chat Drawer — overlay on sm/md, push-friendly fixed panel on lg+ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-[580px] h-full shadow-2xl bg-background/98 backdrop-blur-2xl border-l border-border flex flex-col overflow-hidden text-foreground font-mono"
          >
            {/* Header */}
            <div className="p-4 px-5 border-b border-border bg-card flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Blue-themed bot avatar */}
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-card" />
                </div>

                <div>
                  <h2 className="font-bold text-base text-foreground tracking-tight leading-none">
                    Naim AI
                  </h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ask about Naim Sorker
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
                  {/* Assistant icon — MessageSquare in blue */}
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                    </div>
                  )}

                  <div className="group relative max-w-[90%] sm:max-w-[85%]">
                    <div
                      className={`p-3.5 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-blue-500 text-white rounded-br-sm shadow-sm font-medium"
                          : "bg-muted/70 dark:bg-card border border-border text-foreground rounded-bl-sm"
                      }`}
                    >
                      {renderFormattedContent(msg.content)}
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
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-blue-500 animate-spin" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-muted/70 border border-border rounded-bl-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-500/70 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-blue-500/70 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-blue-500/70 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 py-3 bg-muted/30 border-t border-border shrink-0">
                <p className="text-[11px] font-semibold text-muted-foreground mb-2">
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {INITIAL_SUGGESTIONS.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs bg-background hover:bg-blue-500/5 border border-border hover:border-blue-500/30 text-foreground px-3 py-1.5 rounded-lg transition-colors text-left"
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
              className="p-3.5 px-4 bg-card border-t border-border flex gap-2 items-center shrink-0"
            >
              <Input
                ref={inputRef}
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isLoading}
                className="flex-1 bg-background focus-visible:ring-blue-500 h-10 text-xs sm:text-sm rounded-xl px-3.5 border-border"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputMessage.trim()}
                className="h-10 w-10 shrink-0 rounded-xl bg-blue-500 hover:bg-blue-600 text-white border-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button — blue, matches website accent */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 h-14 w-14 md:w-auto md:px-5 rounded-full bg-blue-500 hover:bg-blue-600 text-white border border-blue-400/30 shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2.5 transition-colors duration-200"
            aria-label="Open AI Chat"
            title="Chat with Naim AI"
          >
            <span className="relative flex items-center justify-center">
              <Bot className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-blue-500" />
              </span>
            </span>
            <span className="hidden md:block font-medium pr-1">Naim AI</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Mail, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

interface Message {
  _id?: string;
  senderName: string;
  senderEmail: string;
  content: string;
  isAdmin: boolean;
  timestamp: string;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname?.startsWith("/admin")) {
    return null;
  }
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [showCTA, setShowCTA] = useState(true);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("chat_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Fetch messages if user exists
  useEffect(() => {
    if (user && isOpen) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 5000); // Polling every 5s
      return () => clearInterval(interval);
    }
  }, [user, isOpen]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Scroll listener for CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowCTA(false);
      } else {
        setShowCTA(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  useEffect(() => {
    if (nameInput && nameInput.length < 2) {
      setNameError("Name must be at least 2 characters");
    } else {
      setNameError("");
    }
  }, [nameInput]);

  useEffect(() => {
    if (emailInput && !validateEmail(emailInput)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }, [emailInput]);

  const fetchMessages = async () => {
    if (!user) return;
    try {
      const res = await fetch(
        `/api/chat/messages?email=${encodeURIComponent(user.email)}`,
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setMessages(data);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const handleOnboarding = (e: React.FormEvent) => {
    e.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);

    if (!nameInput || !emailInput || nameError || emailError) {
      toast.error("Please provide valid information");
      return;
    }
    const newUser = { name: nameInput, email: emailInput };
    localStorage.setItem("chat_user", JSON.stringify(newUser));
    setUser(newUser);
    toast.success(`Welcome, ${nameInput}!`);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !user) return;

    setLoading(true);
    try {
      const res = await fetch("/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderName: user.name,
          senderEmail: user.email,
          content: messageInput,
        }),
      });

      if (res.ok) {
        setMessageInput("");
        fetchMessages();
      }
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* if chat is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 relative"
          >
            <Card className="w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl border-primary/20 bg-card/95 backdrop-blur-md overflow-hidden">
              {/* Header */}
              <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-semibold">Live Chat</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Minus className="h-5 w-5" />
                </Button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-hidden">
                {!user ? (
                  /* Onboarding */
                  <div className="p-6 h-full flex flex-col justify-center gap-4">
                    <div className="text-center mb-4">
                      <h2 className="text-lg font-bold">Get Started</h2>
                      <p className="text-sm text-muted-foreground">
                        Introduce yourself to start messaging.
                      </p>
                    </div>
                    <form onSubmit={handleOnboarding} className="space-y-4">
                      <div className="space-y-1">
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Your Name"
                            className={`pl-9 ${nameError && nameTouched ? "border-destructive focus-visible:ring-destructive" : ""}`}
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            onBlur={() => setNameTouched(true)}
                          />
                        </div>
                        {nameError && nameTouched && (
                          <p className="text-[10px] text-destructive ml-1">
                            {nameError}
                          </p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className={`pl-9 ${emailError && emailTouched ? "border-destructive focus-visible:ring-destructive" : ""}`}
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            onBlur={() => setEmailTouched(true)}
                          />
                        </div>
                        {emailError && emailTouched && (
                          <p className="text-[10px] text-destructive ml-1">
                            {emailError}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={
                          !nameInput ||
                          !emailInput ||
                          !!nameError ||
                          !!emailError
                        }
                      >
                        Start Chatting
                      </Button>
                    </form>
                  </div>
                ) : (
                  /* Messaging */
                  <div className="h-full flex flex-col p-4">
                    <div
                      ref={scrollRef}
                      className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar"
                    >
                      {messages.length === 0 && (
                        <div className="text-center text-muted-foreground py-8">
                          <p>No messages yet.</p>
                          <p className="text-xs">
                            Send a message to start reality.
                          </p>
                        </div>
                      )}
                      {messages.map((msg, i) => (
                        <div
                          key={msg._id || i}
                          className={`flex ${msg.isAdmin ? "justify-start" : "justify-end"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                              msg.isAdmin
                                ? "bg-muted text-foreground rounded-tl-none"
                                : "bg-primary text-primary-foreground rounded-tr-none shadow-md"
                            }`}
                          >
                            {msg.content}
                            <div
                              className={`text-[10px] mt-1 opacity-60 ${msg.isAdmin ? "text-left" : "text-right"}`}
                            >
                              {new Date(msg.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <form
                      onSubmit={sendMessage}
                      className="mt-4 flex gap-2 border-t pt-4"
                    >
                      <Input
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        size="icon"
                        disabled={loading || !messageInput.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* cta live chat with me */}
      <AnimatePresence>
        {!isOpen && showCTA && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-16 right-0 mb-4 whitespace-nowrap"
          >
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-br-none shadow-xl text-sm font-medium relative flex items-center gap-2 border border-primary-foreground/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Chat with Me
            </div>
            {/* Triangle indicator */}
            <div className="absolute right-4 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-primary/20 transition-all duration-300 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

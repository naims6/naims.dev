"use client";

import React, { useEffect, useState, useRef } from "react";
import { format } from "date-fns";
import { Bot, User, MessageSquare, Loader2, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Session {
  _id: string;
  sessionId: string;
  updatedAt: string;
  messages: any[];
}

export default function AdminChatPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchSessions = async () => {
    setLoadingList(true);
    try {
      const res = await fetch("/api/admin/conversations");
      const data = await res.json();
      setSessions(data);
    } catch (error) {
      console.error("Failed to fetch sessions", error);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchMessages = async (sessionId: string) => {
    setLoadingMessages(true);
    try {
      const res = await fetch(`/api/admin/conversations/${sessionId}`);
      const data = await res.json();
      setMessages(data.messages || []);
      setSelectedSession(data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoadingMessages(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            AI Chat History
          </h2>
          <Button variant="ghost" size="icon" onClick={fetchSessions} disabled={loadingList}>
            <RefreshCw className={`w-4 h-4 ${loadingList ? "animate-spin" : ""}`} />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {loadingList ? (
            <div className="flex justify-center p-4">
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
          ) : sessions.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground p-4">No conversations found.</p>
          ) : (
            sessions.map((session) => (
              <button
                key={session.sessionId}
                onClick={() => fetchMessages(session.sessionId)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedSession?.sessionId === session.sessionId
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-sm truncate">
                    Visitor {session.sessionId.substring(0, 6)}
                  </span>
                  <span className={`text-xs ${selectedSession?.sessionId === session.sessionId ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {format(new Date(session.updatedAt), "MMM d, h:mm a")}
                  </span>
                </div>
                <p className={`text-xs truncate ${selectedSession?.sessionId === session.sessionId ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {session.messages?.[0]?.content || "Started conversation..."}
                </p>
              </button>
            ))
          )}
        </div>
        
        <div className="p-4 border-t border-border">
          <Button asChild variant="outline" className="w-full justify-start gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-background/50">
        {selectedSession ? (
          <>
            <div className="p-4 border-b border-border bg-card/50 backdrop-blur flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  Session: {selectedSession.sessionId}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Last active: {format(new Date(selectedSession.updatedAt), "PPpp")}
                </p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {loadingMessages ? (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role !== "user" && (
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    
                    <div className="max-w-[70%]">
                      <div
                        className={`p-4 rounded-2xl ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-card border border-border rounded-bl-sm"
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                      </div>
                      <p className={`text-[11px] text-muted-foreground mt-1.5 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                        {format(new Date(msg.createdAt), "h:mm a")}
                      </p>
                    </div>

                    {msg.role === "user" && (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
            <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 opacity-50" />
            </div>
            <p>Select a conversation from the sidebar to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}

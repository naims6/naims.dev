"use client";

import { useEffect } from "react";
import "./n8n-chat.css";

export default function N8nChat() {
  useEffect(() => {
    let disposed = false;

    const closeButtonListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || typeof target.closest !== "function") return;
      if (!target.closest(".chat-close-button")) return;

      event.preventDefault();
      event.stopPropagation();

      const toggle = document.querySelector<HTMLElement>(
        "#n8n-chat .chat-window-toggle",
      );
      toggle?.click();
    };

    (async () => {
      const { createChat } = await import("@n8n/chat");
      if (disposed) return;

      createChat({
        webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK!,
        target: '#n8n-chat',
       	mode: 'window',
       	showWindowCloseButton: true,
       	chatInputKey: 'chatInput',
       	chatSessionKey: 'sessionId',
       	loadPreviousSession: true,
       	metadata: {},
       	showWelcomeScreen: false,
        defaultLanguage: 'en',
        initialMessages: [
        	'Hi there! 👋',
        	'My name is Naim Ai. How can I assist you today?'
       	],
        i18n: {
        	en: {
       		title: 'Hi there! 👋',
       		subtitle: "Start a chat. I am here to help you 24/7.",
       		footer: '',
       		getStarted: 'New Conversation',
            inputPlaceholder: 'Type your question..',
       		closeButtonTooltip: '',
        	},
      	},
      });

      document.addEventListener("click", closeButtonListener, true);
    })();

    return () => {
      disposed = true;
      document.removeEventListener("click", closeButtonListener, true);
    };
  }, []);

  return null;
}

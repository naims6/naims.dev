"use client";

import { useEffect } from "react";
import "./n8n-chat.css";

export default function N8nChat() {
  useEffect(() => {
    (async () => {
      const { createChat } = await import("@n8n/chat");
      createChat({
        // webhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK!,
        webhookUrl: "http://localhost:5678/webhook/881ac3f9-6b05-4654-a637-df00ecbcfa9f/chat",
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
    })();
  }, []);

  return null;
}

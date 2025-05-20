"use client";

import { Chat } from "@/types/Chat";
import { motion } from "framer-motion";


interface Props {
  selectedChat: Chat;
}


const ChatWindow = ({ selectedChat }: Props) => {
  // Static dummy conversation
  const messages = [
    { id: 1, from: "user", text: "Hey! I need help with my order." },
    { id: 2, from: "admin", text: "Sure! Can you tell me your order ID?" },
    { id: 3, from: "user", text: "It’s #123456." },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-white shadow-md rounded p-4">
      {/* Header */}
      <div className="border-b pb-2 mb-4">
        <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
        <p className="text-sm text-green-600">Online</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: msg.id * 0.1 }}
            className={`max-w-xs px-4 py-2 rounded-md ${
              msg.from === "user"
                ? "bg-gray-200 self-start"
                : "bg-blue-500 text-white self-end"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};

export default ChatWindow;


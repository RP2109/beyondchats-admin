"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import ChatCard from "@/components/ChatCard";
import ChatWindow from "@/components/ChatWindow";
import { dummyChats } from "@/data/dummyChats";
import { Chat } from "@/types/Chat";

export default function HomePage() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">Inbox</h1>
          {dummyChats.map((chat) => (
            <div key={chat.id} onClick={() => setSelectedChat(chat)}>
              <ChatCard
                name={chat.name}
                message={chat.message}
                time={chat.time}
                unread={chat.unread}
              />
            </div>
          ))}
        </div>

        <div>
          {selectedChat ? (
            <ChatWindow selectedChat={selectedChat} />
          ) : (
            <div className="text-gray-400 mt-10">Select a chat to view conversation</div>
          )}
        </div>
      </div>
    </Layout>
  );
}

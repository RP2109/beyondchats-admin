"use client";

import { motion } from "framer-motion";

interface ChatCardProps {
  name: string;
  message: string;
  time: string;
  unread: boolean;
}

const ChatCard = ({ name, message, time, unread }: ChatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded shadow-sm mb-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center"
    >
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 truncate w-60">{message}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500">{time}</p>
        {unread && <span className="w-2 h-2 bg-blue-500 rounded-full inline-block mt-1"></span>}
      </div>
    </motion.div>
  );
};

export default ChatCard;


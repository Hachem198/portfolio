import React from "react";
import { Bot } from "lucide-react";

const ChatBotButton = () => {
  return (
    <div className="bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-full cursor-pointer">
      <Bot className="w-6 h-6 text-white" />
    </div>
  );
};

export default ChatBotButton;

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bot } from "lucide-react";
import ChatBotBody from "./ChatBotBody";
import ChatBotButton from "./ChatBotButton";

const ChatBotPopover = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger>
          <ChatBotButton></ChatBotButton>
        </PopoverTrigger>
        <PopoverContent className="w-[450px] p-0 rounded-3xl mr-4">
          <ChatBotBody />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatBotPopover;

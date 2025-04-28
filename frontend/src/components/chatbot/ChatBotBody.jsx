import React, { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { chatStore } from "./store/chatStore";
import { getBotResponse } from "./hooks/GetBotResponses";
import { observer } from "mobx-react-lite";
const ChatBotBody = observer(() => {
  const [newMessage, setNewMessage] = useState("");
  const chatBodyRef = useRef(null);
  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      chatStore.addMessage({
        role: "user",
        text: newMessage.trim(),
        hideInChat: false,
      });

      chatStore.addMessage({
        role: "model",
        text: "Thinking...",
        hideInChat: false,
      });

      try {
        const botResponse = await getBotResponse();
        chatStore.removeThinkingMessage();
        chatStore.addMessage({ role: "model", text: botResponse });
      } catch (error) {
        console.error("Error fetching bot response:", error);
        chatStore.removeThinkingMessage();
        chatStore.addMessage({
          role: "model",
          text: "Sorry, something went wrong.",
        });
      }
      setNewMessage("");
    }
  };
  useEffect(() => {
    //autoscroll
    scrollToBottom();
  }, [chatStore.messages.slice()]);
  return (
    <div className="flex flex-col h-[500px]">
      {/* Header */}
      <div className="bg-purple-600 p-4 flex items-center rounded-3xl">
        <FaRobot className="text-white w-5 h-5 mr-2" />
        <span className="text-white font-semibold">AskOmar</span>
      </div>

      {/* Messages */}

      <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatStore.messages.map(
          (message, index) =>
            !message.hideInChat && (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "items-start"
                }`}
              >
                {message.role === "model" && (
                  <FaRobot className="text-purple-600 w-5 h-5 mr-2 mt-1" />
                )}
                <div
                  className={`px-4 py-2 rounded-lg max-w-[80%] ${
                    message.role === "user"
                      ? "bg-purple-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            )
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-gray-200 p-4 flex items-center gap-2"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
});

export default ChatBotBody;

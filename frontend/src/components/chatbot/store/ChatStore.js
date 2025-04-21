import { makeAutoObservable, action } from "mobx";
import { personalInfo } from "../../constants/personalInfo";
import { aiPrompt } from "../../constants/AiPrompt";
class ChatStore {
  messages = [
    {
      role: "model",
      text: aiPrompt,
      hideInChat: true,
    },
    {
      role: "model",
      text: "Hello! What do you want to know about Omar?",
      hideInChat: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(message) {
    this.messages.push(message);
  }

  removeThinkingMessage() {
    this.messages = this.messages.filter((msg) => msg.text !== "Thinking...");
  }
}

export const chatStore = new ChatStore();

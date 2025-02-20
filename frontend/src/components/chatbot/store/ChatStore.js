import { makeAutoObservable, action } from "mobx";
import { personalInfo } from "../../constants/personalInfo";
class ChatStore {
  messages = [
    {
      role: "model",
      text: personalInfo,
      hideInChat: true,
    },
    {
      role: "model",
      text: "Hello! How can I help you today?",
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

import { chatStore } from "../store/chatStore";

export const getBotResponse = async (lastUserMessage) => {
  const history = chatStore.messages.map(({ role, text }, index, arr) => ({
    role,
    parts: [
      {
        text:
          index === arr.length - 1
            ? `Using only the details provided above, please address this query: ${text}`
            : text,
      },
    ],
  }));

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: history }),
  };

  try {
    const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "API request failed");
    }

    if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
      throw new Error("Invalid AI response structure");
    }

    const apiResponseText = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();

    return apiResponseText;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

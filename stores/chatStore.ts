import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
}

interface ChatActions {
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  clearMessages: () => void;
  setLoading: (loading: boolean) => void;
}

type ChatStore = ChatState & ChatActions;

export const useChatStore = create<ChatStore>()(
  devtools(
    persist(
      (set) => ({
        messages: [],
        isLoading: false,

        addMessage: (message) =>
          set(
            (state) => ({
              messages: [...state.messages, message]
            }),
            false,
            "chat/addMessage"
          ),

        setMessages: (messages) => set({ messages }, false, "chat/setMessages"),

        clearMessages: () => set({ messages: [] }, false, "chat/clearMessages"),

        setLoading: (loading) => set({ isLoading: loading }, false, "chat/setLoading")
      }),
      {
        name: "chatStorage",
        partialize: (state) => ({
          messages: state.messages
        })
      }
    ),
    { name: "ChatStore" }
  )
);

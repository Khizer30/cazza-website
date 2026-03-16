"use client";
import { useAskDemoQuestion, useDeleteDemoMessages, useGetDemoMessages } from "@services/chatbotService";
import { useChatStore } from "@stores/chatStore";
import { useEffect } from "react";

export const useChatbot = () => {
  const { messages, addMessage, setMessages, clearMessages, setLoading, isLoading: isStoreLoading } = useChatStore();

  const { data: apiMessages, isLoading: isHistoryLoading } = useGetDemoMessages();
  const { mutateAsync: askQuestionMutation } = useAskDemoQuestion();
  const { mutateAsync: deleteMessagesMutation } = useDeleteDemoMessages();

  // Sync backend messages to store
  useEffect(() => {
    if (apiMessages) {
      const storeMessages = apiMessages.flatMap((msg) => [
        {
          id: `u-${msg.id}`,
          role: "user" as const,
          content: msg.question,
          timestamp: msg.createdAt
        },
        {
          id: `a-${msg.id}`,
          role: "assistant" as const,
          content: msg.answer,
          timestamp: msg.updatedAt
        }
      ]);
      setMessages(storeMessages);
    }
  }, [apiMessages, setMessages]);

  const askQuestion = async (question: string) => {
    try {
      setLoading(true);

      // Optimistically add user message
      const userMessageId = `u-${Date.now()}`;
      addMessage({
        id: userMessageId,
        role: "user",
        content: question,
        timestamp: new Date().toISOString()
      });

      const res = await askQuestionMutation({ question });

      if (res) {
        addMessage({
          id: `a-${res.messageId}`,
          role: "assistant",
          content: res.answer,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error("Failed to ask question:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const clearChatHistory = async () => {
    try {
      setLoading(true);
      await deleteMessagesMutation();
      clearMessages();
    } catch (error) {
      console.error("Failed to clear chat history:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    askQuestion,
    clearChatHistory,
    isLoading: isStoreLoading || isHistoryLoading,
    isHistoryLoading
  };
};

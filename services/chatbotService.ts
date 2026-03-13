import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "@hooks/useAxios";
import { useAuthStore } from "@stores/authStore";
import type { User } from "@stores/authStore";

// Set Demo User
export interface SetDemoUserBody {
  name: string;
  email: string;
}

export interface SetDemoUserResponse {
  user: User & {
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string;
}

export function useSetDemoUser() {
  const api = useAxios();
  const setCredentials = useAuthStore((state) => state.setCredentials);

  return useMutation({
    mutationFn: async (body: SetDemoUserBody) => {
      const res = await api.post<{ data: SetDemoUserResponse }>("/chatbot/demo/user", body);
      return res.data.data;
    },
    onSuccess: (data) => {
      setCredentials(data.user, data.accessToken);
    }
  });
}

// Get Demo User Messages
export interface DemoMessage {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export function useGetDemoMessages() {
  const api = useAxios();
  const userId = useAuthStore((state) => state.user?.id);

  return useQuery({
    queryKey: ["chatbot", "messages"],
    queryFn: async () => {
      const res = await api.get<{ data: { messages: DemoMessage[] } }>("/chatbot/demo/messages");
      return res.data.data.messages;
    },
    enabled: !!userId
  });
}

// Ask Question for Demo User
export interface AskDemoQuestionBody {
  question: string;
}

export interface AskDemoQuestionResponse {
  messageId: string;
  question: string;
  answer: string;
  sourceUrl: string;
}

export function useAskDemoQuestion() {
  const api = useAxios();

  return useMutation({
    mutationFn: async (body: AskDemoQuestionBody) => {
      const res = await api.post<{ data: AskDemoQuestionResponse }>("/chatbot/demo/ask", body);
      return res.data.data;
    }
  });
}

// Delete Demo User Messages
export function useDeleteDemoMessages() {
  const api = useAxios();

  return useMutation({
    mutationFn: async () => {
      const res = await api.delete<{ success: boolean; message: string }>("/chatbot/demo/messages");
      return res.data;
    }
  });
}

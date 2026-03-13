import { QueryCache, QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: true
    }
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const err = error as AxiosError<{ error?: unknown; message?: unknown }>;
      const raw = err.response?.data?.error ?? err.response?.data?.message;
      const message = typeof raw === "string" ? raw : "Something went wrong";
      console.error(message);
    }
  })
});

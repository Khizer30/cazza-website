"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@lib/reactQuery";
import type { Children } from "@typedefs/types";
import type { ReactNode } from "react";

export default function Providers({ children }: Children): ReactNode {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

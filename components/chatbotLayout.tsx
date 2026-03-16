"use client";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ChatbotLayout({ children }: Props) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-background">
      <main className="relative flex flex-1 flex-col min-h-0">{children}</main>
    </div>
  );
}

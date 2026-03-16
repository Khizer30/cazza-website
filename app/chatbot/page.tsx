"use client";
import { Check, Copy, Loader2, Send, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import Logo from "@assets/image/logo.webp";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@components/alertDialog";
import { Button } from "@components/button";
import { ChatbotLayout } from "@components/chatbotLayout";
import { Input } from "@components/input";
import Navbar from "@components/navbar";
import { ScrollArea } from "@components/scrollArea";
import { useChatbot } from "@hooks/useChatbot";
import { suggestedPrompts } from "@lib/prompt";
import { useAuthStore } from "@stores/authStore";
import { cn } from "@lib/utils";

import { DemoUserModal } from "@components/demoUserModal";

const markdownComponents: Components = {
  p: ({ children }) => <p className="mb-3 last:mb-0 text-foreground leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic text-foreground">{children}</em>,
  h1: ({ children }) => <h1 className="mt-5 mb-4 text-2xl font-bold text-foreground first:mt-0">{children}</h1>,
  h2: ({ children }) => <h2 className="mt-4 mb-3 text-xl font-bold text-foreground first:mt-0">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-4 mb-3 text-lg font-semibold text-foreground first:mt-0">{children}</h3>,
  ul: ({ children }) => <ul className="mb-3 ml-5 space-y-2 list-disc text-foreground">{children}</ul>,
  ol: ({ children }) => <ol className="mb-3 ml-5 space-y-2 list-decimal text-foreground">{olChildren(children)}</ol>,
  li: ({ children }) => <li className="pl-1 leading-relaxed text-foreground">{children}</li>,
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    return isInline ? (
      <code className="bg-muted text-foreground rounded px-1.5 py-0.5 font-mono text-sm" {...props}>
        {children}
      </code>
    ) : (
      <code className={cn("block bg-muted p-3 rounded-lg overflow-x-auto text-sm font-mono", className)} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-muted text-foreground mb-3 overflow-x-auto rounded-lg p-3 font-mono text-sm">{children}</pre>
  ),
  hr: () => <hr className="my-4 border-border" />,
  a: ({ children, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary transition-colors hover:text-primary/80 underline"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-muted-foreground/30 text-foreground/80 my-3 border-l-4 pl-4 italic">
      {children}
    </blockquote>
  )
};

// Helper for OL children since react-markdown v10 might pass things differently
function olChildren(children: ReactNode) {
  return children;
}

export default function Page() {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [clearDialogOpen, setClearDialogOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { messages, askQuestion, clearChatHistory, isLoading, isHistoryLoading } = useChatbot();
  const userName = useAuthStore((state) => state.user?.name);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (text?: string) => {
    const actualInput = text || input;
    if (!actualInput.trim() || isLoading) {
      return;
    }

    if (!text) {
      setInput("");
    }
    await askQuestion(actualInput.trim());
  };

  const handleCopy = (messageId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(messageId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <ChatbotLayout>
      <DemoUserModal />
      <Navbar />

      <div className="flex h-[calc(100vh-64px)] flex-col bg-background">
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between border-b border-border bg-card px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20">
              <Image src={Logo} alt="Cazza Logo" className="h-5 w-5 object-contain" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-foreground">Ask Cazza</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                AI Business Advisor
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setClearDialogOpen(true)}
            className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive h-8 gap-2"
            disabled={messages.length === 0 || isLoading}
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">Clear Chat</span>
          </Button>
        </header>

        {/* Chat Area */}
        <ScrollArea className="flex-1">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
            {isHistoryLoading ? (
              <div className="space-y-6 pt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={cn("flex", i % 2 === 0 ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "max-w-[80%] space-y-2",
                        i % 2 === 0 ? "items-end" : "items-start",
                        "flex flex-col"
                      )}
                    >
                      <div className="h-3 w-16 animate-pulse rounded bg-muted" />
                      <div
                        className={cn(
                          "h-20 w-64 animate-pulse rounded-2xl bg-muted md:w-96",
                          i % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : messages.length > 0 ? (
              <div className="space-y-6 pb-24">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex w-full group", message.role === "user" ? "justify-end" : "justify-start")}
                  >
                    <div
                      className={cn(
                        "relative px-4 py-3 shadow-xs transition-all",
                        message.role === "user"
                          ? "max-w-[85%] sm:max-w-[70%] bg-primary text-primary-foreground rounded-2xl rounded-tr-none wrap-break-word"
                          : "max-w-[90%] sm:max-w-[85%] bg-card border border-border text-foreground rounded-2xl rounded-tl-none wrap-break-word"
                      )}
                    >
                      {message.role === "assistant" ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown components={markdownComponents}>{message.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      )}

                      {/* Message Actions */}
                      <div
                        className={cn(
                          "absolute -bottom-8 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
                          message.role === "user" ? "right-0" : "left-0"
                        )}
                      >
                        <button
                          onClick={() => handleCopy(message.id, message.content)}
                          className={cn(
                            "flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background transition-all hover:scale-105",
                            copiedId === message.id
                              ? "text-green-500 border-green-500"
                              : "text-muted-foreground hover:text-primary"
                          )}
                          title="Copy message"
                        >
                          {copiedId === message.id ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-card border-border border px-4 py-3 shadow-xs rounded-2xl rounded-tl-none flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-xs text-muted-foreground font-medium">Assistant is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} className="h-4" />
              </div>
            ) : (
              <div className="flex min-h-[calc(100vh-250px)] flex-col items-center justify-center pt-8 text-center">
                <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/10 opacity-75" />
                  <div className="bg-primary/5 relative flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 shadow-inner">
                    <Image src={Logo} alt="Cazza Logo" className="h-10 w-10 object-contain" />
                  </div>
                </div>
                <h2 className="mb-2 text-3xl font-bold text-foreground">
                  How can I help you{userName ? `, ${userName}` : ""}?
                </h2>

                <p className="mb-10 max-w-md text-muted-foreground">
                  Ask me anything about your TikTok shop, Amazon business, or VAT compliance.
                </p>
                <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="hover:border-primary/50 hover:bg-primary/5 h-auto w-full justify-start border-border bg-card p-4 text-left transition-all hover:shadow-md dark:bg-card/40 whitespace-normal wrap-break-word"
                      onClick={() => handleSendMessage(prompt)}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-medium">{prompt}</span>
                        <span className="text-[10px] text-muted-foreground uppercase">Try this prompt</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-background/80 border-border sticky bottom-0 z-10 border-t p-4 backdrop-blur-md sm:p-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative flex items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask Cazza a question..."
                className="bg-card border-border flex-1 rounded-2xl pr-14 py-6 text-base shadow-sm focus-visible:ring-primary/20"
                disabled={isLoading}
              />
              <Button
                size="icon"
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 h-10 w-10 rounded-xl transition-transform active:scale-95"
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </div>
            <p className="mt-3 text-center text-[10px] text-muted-foreground font-medium">
              Cazza can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>

      {/* Clear History Dialog */}
      <AlertDialog open={clearDialogOpen} onOpenChange={setClearDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear Chat History</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your entire conversation history. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await clearChatHistory();
                setClearDialogOpen(false);
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Clear Everything
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ChatbotLayout>
  );
}

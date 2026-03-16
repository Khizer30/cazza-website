"use client";
import { useSetDemoUser } from "@services/chatbotService";
import { useAuthStore } from "@stores/authStore";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./dialog";

import { Button } from "./button";
import { Input } from "./input";
import { Loader2 } from "lucide-react";

export function DemoUserModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const accessToken = useAuthStore((state) => state.accessToken);
  const { mutate: setDemoUser, isPending } = useSetDemoUser();

  const isOpen = !accessToken;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      return;
    }

    setDemoUser({ name, email });
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Cazza AI</DialogTitle>
          <DialogDescription>
            Please enter your details to start chatting with our AI Business Advisor.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Starting session...
                </>
              ) : (
                "Start Chatting"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
}

interface AuthActions {
  setCredentials: (user: User | null, accessToken: string | null) => void;
  logout: () => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        // State
        user: null,
        accessToken: null,

        // Actions
        setCredentials: (user, accessToken) => set({ user, accessToken }, false, "auth/setCredentials"),

        logout: () => set({ user: null, accessToken: null }, false, "auth/logout")
      }),
      {
        name: "authStorage",
        partialize: (state) => ({
          user: state.user,
          accessToken: state.accessToken
        })
      }
    ),
    { name: "AuthStore" }
  )
);

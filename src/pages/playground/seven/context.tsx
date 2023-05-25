import React, { useMemo } from "react";
import { createContext, useContext, useState } from "react";

interface UserContextState {
  id: string;
  nickname: string;
}

interface UserContextActions {
  change(key: keyof UserContextState, value: string): void;
  reset(): void;
}

interface UserContextType {
  state: UserContextState;
  actions: UserContextActions;
}

const initialState: UserContextState = {
  id: "ckstn0777",
  nickname: "기운찬곰",
};

const UserContext = createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function UserProvider({ children }: Props) {
  const [state, setState] = useState<UserContextState>(initialState);
  const actions: UserContextActions = useMemo(
    () => ({
      change(key, value) {
        setState((prev) => ({ ...prev, [key]: value }));
      },
      reset() {
        setState(initialState);
      },
    }),
    []
  );

  const value = useMemo(() => ({ state, actions }), [state, actions]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUserContext must be used within UserProvider");
  }
  return context;
}

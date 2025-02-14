"use client";

import React, { createContext, useState } from "react";
interface ContextType {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProps {
  children: React.ReactNode;
}

export const Context = createContext({} as ContextType);

export default function ContextProvider({ children }: ContextProps) {
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider value={{ modal, setModal }}>{children}</Context.Provider>
  );
}

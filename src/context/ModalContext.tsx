"use client";
import React, { createContext, useState } from "react";
import { ModalContextType } from "@/@types/modal";

interface ContextProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

export default function ModalContextProvider({ children }: ContextProps) {
  const [modal, setModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

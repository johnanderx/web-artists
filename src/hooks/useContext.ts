import { useContext } from "react";
import { Context } from "@/context/Context";
export const useContexts = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContexts deve ser usado dentro de um ContextProvider");
  }
  return context;
};

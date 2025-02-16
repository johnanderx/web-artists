import { useContext } from "react";
import { PaginationContext } from "@/context/PaginationContext";
export const usePagination = () => {
  const context = useContext(PaginationContext);
  return context;
};

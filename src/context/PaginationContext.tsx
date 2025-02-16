"use client";
import { createContext, useState } from "react";
import { PaginationContextType } from "@/@types/pagination";
import { Track } from "@/@types/artist";

interface PaginationContextProps {
  children: React.ReactNode;
}

export const PaginationContext = createContext({} as PaginationContextType);

export default function PaginationContextProvider({
  children,
}: PaginationContextProps) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [query, setQuery] = useState("");
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <PaginationContext.Provider
      value={{
        tracks,
        setTracks,
        query,
        setQuery,
        limit,
        offset,
        setOffset,
        total,
        setTotal,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

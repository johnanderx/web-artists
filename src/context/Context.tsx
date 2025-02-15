"use client";
import { Track, Artist } from "@/@types/types";
import React, { createContext, useEffect, useState } from "react";
interface ContextType {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  tracks: Track[];
  setTracks: React.Dispatch<React.SetStateAction<Track[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedArtists: Artist[];
  setSelectedArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
  hiredArtists: Artist[];
  setHiredArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
}

interface ContextProps {
  children: React.ReactNode;
}

export const Context = createContext({} as ContextType);

export default function ContextProvider({ children }: ContextProps) {
  const [modal, setModal] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [query, setQuery] = useState("Rock");
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([]);
  const [hiredArtists, setHiredArtists] = useState<Artist[]>([]);

  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        tracks,
        setTracks,
        query,
        setQuery,
        limit,
        offset,
        setOffset,
        total,
        setTotal,
        selectedArtists,
        setSelectedArtists,
        hiredArtists,
        setHiredArtists,
      }}
    >
      {children}
    </Context.Provider>
  );
}

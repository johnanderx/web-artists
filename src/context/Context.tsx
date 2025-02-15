"use client";
import { Track, Artist } from "@/@types/types";
import React, { createContext, useState } from "react";

interface HiredArtist {
  name: string;
  artist: string;
  money: number;
  eventData: string;
  address: string;
}

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

  hiredArtists: HiredArtist[];
  setHiredArtists: React.Dispatch<React.SetStateAction<HiredArtist[]>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  artist: string;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  eventData: string;
  setEventData: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
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
  const [hiredArtists, setHiredArtists] = useState<HiredArtist[]>([]);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [money, setMoney] = useState(0);
  const [eventData, setEventData] = useState("");
  const [address, setAddress] = useState("");
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
        hiredArtists,
        setHiredArtists,
        name,
        setName,
        money,
        setMoney,
        address,
        setAddress,
        artist,
        setArtist,
        eventData,
        setEventData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

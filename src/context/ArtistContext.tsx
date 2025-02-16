"use client";
import { createContext, useState } from "react";
import { ArtistContextType, HiredArtistType } from "@/@types/artist";
import { useRouter } from "next/navigation";

interface ArtistContextProps {
  children: React.ReactNode;
}

export const ArtistContext = createContext({} as ArtistContextType);

export default function ArtistContextProvider({
  children,
}: ArtistContextProps) {
  const [hiredArtists, setHiredArtists] = useState<HiredArtistType[]>([]);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [money, setMoney] = useState(0);
  const [eventData, setEventData] = useState("");
  const [address, setAddress] = useState("");

  const route = useRouter();

  return (
    <ArtistContext.Provider
      value={{
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
    </ArtistContext.Provider>
  );
}

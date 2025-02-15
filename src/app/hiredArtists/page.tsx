"use client";

import React, { useEffect } from "react";
import { useContexts } from "@/hooks/useContext";

export default function HiredArtists() {
  const { hiredArtists, setHiredArtists } = useContexts();

  useEffect(() => {
    const storedHiredArtists = localStorage.getItem("hiredArtists");
    if (storedHiredArtists) {
      setHiredArtists(JSON.parse(storedHiredArtists));
    }
  }, [setHiredArtists]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-white text-center mt-4 mb-4">
        Artistas Contratados
      </h1>
      <ul className="space-y-2 w-full flex flex-col items-center">
        {hiredArtists.map((artist, index: number) => (
          <li
            className="bg-black hover:bg-neutral-950 duration-500 p-4 w-[98%] lg:w-96 rounded-lg shadow-md flex flex-col justify-center items-center gap-4"
            key={index}
          >
            <div className="flex gap-2">
              <span className="text-sm text-white">Name:</span>
              <span className="text-gray01">{artist.name}</span>
            </div>

            <div className="flex gap-2">
              <span className="text-sm text-white">Artista:</span>
              <p className="text-gray01">{artist.artist}</p>
            </div>
            <div className="flex gap-2">
              <span className="text-sm text-white">Money:</span>
              <span className="text-gray01">{artist.money}</span>
            </div>

            <div className="flex gap-2">
              <span className="text-sm text-white">Event Data:</span>
              <p className="text-gray01">{artist.eventData}</p>
            </div>

            <div className="flex gap-2">
              <span className="text-sm text-white">Address:</span>
              <span className="text-gray01">{artist.address}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

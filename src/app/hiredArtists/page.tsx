"use client";

import React, { useEffect } from "react";
import { useContexts } from "@/hooks/useContext";
import { Artist } from "@/@types/types";

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
        {hiredArtists.map((artist: Artist, index: number) => (
          <li
            className="bg-black hover:bg-neutral-950 duration-500 p-4 w-[98%] lg:w-96 rounded-lg shadow-md flex items-center gap-4"
            key={artist.id || index}
          >
            <img
              className="h-20 w-20"
              src={artist.picture_medium}
              alt={artist.name}
            />
            <div>
              <p className="text-sm text-gray02  text-center truncate w-32">
                Artista: {artist.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

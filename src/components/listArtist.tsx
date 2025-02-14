"use client";

import React from "react";
import { colors } from "@/global/colors";

const data = {
  artists: [
    { id: 1, name: "John", style: "Classic" },
    { id: 2, name: "Melancia", style: "Classic" },
    { id: 3, name: "Melancia", style: "Classic" },
    { id: 4, name: "Xedo", style: "Rock" },
    { id: 5, name: "Xedo", style: "Rock" },
  ],
};

export default function listArtist() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">List of Artists</h1>
      <ul className="space-y-2">
        {data.artists.map((artist) => (
          <li key={artist.id} className="bg-black p-2 rounded-lg shadow-md">
            <h2
              style={{ color: colors.gray01 }}
              className="text-lg font-semibold"
            >
              {artist.name}
            </h2>
            <p style={{ color: colors.gray02 }} className="text-sm">
              Style: {artist.style}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

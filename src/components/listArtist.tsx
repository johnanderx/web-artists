"use client";

import React from "react";

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
      <ul className="space-y-2 w-screen flex flex-col items-center">
        {data.artists.map((artist) => (
          <li
            key={artist.id}
            className="bg-black hover:bg-neutral-950 duration-500 p-4 w-11/12 lg:w-96 rounded-lg shadow-md flex justify-between items-center"
          >
            <img
              className="h-20 w-20"
              src="https://www.geledes.org.br/wp-content/uploads/2009/06/Michael-Jackson-Bad.jpg"
              alt="cover"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray01">
                {artist.name}
              </h2>
              <span className="text-sm text-gray02">Style: {artist.style}</span>
            </div>

            <button
              className={`text-white rounded-lg w-24 p-2 flex justify-center bg-dark02 hover:bg-zinc-700 duration-500`}
            >
              Selecionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

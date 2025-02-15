"use client";
import Modal from "./Modal";
import Button from "./Button";
import { useContexts } from "@/hooks/useContext";
import { useEffect } from "react";
import Input from "./Input";
import { Track, Artist } from "@/@types/types";

export default function ListArtist() {
  const {
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
    setSelectedArtists,
  } = useContexts();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/https://api.deezer.com/search?q=${query}&limit=${limit}&index=${offset}`
        );

        const data = await response.json();
        if (data.data) {
          setTracks(data.data);
          setTotal(data.total);
        } else {
          console.log("Dados não encontrados na resposta da API");
        }
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
      }
    };

    fetchTracks();
  }, [query, limit, offset]);

  const nextPage = () => {
    if (offset + limit < total) setOffset(offset + limit);
  };

  const prevPage = () => {
    if (offset > 0) setOffset(offset - limit);
  };

  const openModal = (artist: Artist) => {
    setModal(!modal);
    setSelectedArtists((prevArtist) => [...prevArtist, artist]);
  };

  return (
    <div className="p-4 space-y-4">
      <Input
        placeholder="search"
        event={(e: any) => setQuery(e.target.value)}
      />
      <h1 className="text-xl text-white font-bold">List of Tracks</h1>
      <ul className="space-y-2 w-full flex flex-col items-center">
        {tracks.map((track: Track) => (
          <li
            key={track.id}
            className="bg-black hover:bg-neutral-950 duration-500 p-4 w-[98%] lg:w-96 rounded-lg shadow-md flex justify-between items-center"
          >
            <img
              className="h-20 w-20"
              src={track.artist.picture_medium}
              alt={track.artist.name}
            />
            <div>
              <h2 className="text-lg text-center font-semibold text-gray01 truncate w-32 ">
                {track.title}
              </h2>
              <p className="text-sm text-gray02  text-center truncate w-32">
                Artista: {track.artist.name}
              </p>
            </div>
            <Button title="Selecionar" event={() => openModal(track.artist)} />
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <Button title="Anterior" event={prevPage} />
        <Button title="Próximo" event={nextPage} />
      </div>

      {modal && <Modal />}
    </div>
  );
}

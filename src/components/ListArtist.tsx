"use client";
import { useEffect } from "react";
import { useModal } from "@/hooks/useContext";
import { usePagination } from "@/hooks/usePagination";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import { Track } from "@/@types/artist";

export default function ListArtist() {
  const { modal, setModal } = useModal();

  const {
    tracks,
    setTracks,
    query,
    setQuery,
    limit,
    offset,
    setOffset,
    total,
    setTotal,
  } = usePagination();

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

  return (
    <div className="p-4 space-y-4">
      <Input
        type="text"
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
                Artist: {track.artist.name}
              </p>
            </div>
            <Button title="Select" event={() => setModal(!modal)} />
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-4">
        <Button title="Prev" event={prevPage} />
        <Button title="Next" event={nextPage} />
      </div>

      {modal && <Modal />}
    </div>
  );
}

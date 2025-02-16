"use client";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useContext";
import { usePagination } from "@/hooks/usePagination";
import { useArtist } from "@/hooks/useArtist";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import api from "@/services/api";
import { Track } from "@/@types/artist";
import Skeleton from "./Skeleton";

export default function ListArtist() {
  const { modal, setModal } = useModal();
  const [loading, setLoading] = useState(true);

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

  const { setSelectedArtist } = useArtist();

  const openModal = (artistName: string) => {
    setModal(!modal);
    setSelectedArtist(artistName);
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true);
        const response = await api.get("search", {
          params: {
            q: query,
            limit: limit,
            index: offset,
          },
        });

        const data = response.data;

        if (data.data) {
          setTracks(data.data);
          setTotal(data.total);
        } else {
          console.log("Dados não encontrados na resposta da API");
        }
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
      } finally {
        setLoading(false);
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
        {loading
          ? // Creating an array with x (limit) empty elements or rendering the loaded items.
            Array.from({ length: limit }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : tracks.map((track: Track) => (
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
                <Button
                  title="Select"
                  event={() => openModal(track.artist.name)}
                />
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

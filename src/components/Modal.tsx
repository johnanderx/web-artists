import React, { useCallback, useEffect } from "react";
import Input from "./Input";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import { useContexts } from "@/hooks/useContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Modal() {
  const { modal, setModal, selectedArtists, setHiredArtists, hiredArtists } =
    useContexts();

  const route = useRouter();

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const hireArtist = () => {
    setHiredArtists(selectedArtists);
    setModal(!modal);
    route.push("/hiredArtists");
  };

  useEffect(() => {
    const existingHiredArtists = JSON.parse(
      localStorage.getItem("hiredArtists") || "[]"
    );
    // checking if the list of existing localstorage artists already has an artist with the same name as the new artist.
    const filteredArtists = hiredArtists.filter(
      (artist) =>
        !existingHiredArtists.some(
          (existingArtist: any) => existingArtist.name === artist.name
        )
    );

    const updatedHiredArtists = [...existingHiredArtists, ...filteredArtists];

    localStorage.setItem("hiredArtists", JSON.stringify(updatedHiredArtists));
  }, [hiredArtists]);
  return (
    <motion.div
      className="bg-[rgba(0,0,0,0.5)] fixed w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-dark01 w-[90%] lg:w-[500px] p-8 rounded-xl">
        <div className="flex flex-col items-center gap-4">
          <IoCloseSharp
            onClick={() => setModal(!modal)}
            className="text-white text-4xl cursor-pointer"
          />
          <Input placeholder="name" />
          <Input placeholder="Artista" />
          <Input placeholder="Cachê" />
          <Input placeholder="Data do evento" />
          <Input placeholder="Endereço" />
          <Button title="Enviar" event={hireArtist} />
        </div>
      </div>
    </motion.div>
  );
}

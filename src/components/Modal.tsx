import React, { useCallback, useEffect } from "react";
import Input from "./Input";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import { useContexts } from "@/hooks/useContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Modal() {
  const {
    modal,
    setModal,
    setHiredArtists,
    hiredArtists,
    name,
    artist,
    address,
    eventData,
    money,
    setName,
    setArtist,
    setAddress,
    setEventData,
    setMoney,
  } = useContexts();

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
    const formData = { name, artist, money, eventData, address };
    const updatedHiredArtists = [...hiredArtists, formData];
    setHiredArtists(updatedHiredArtists);

    localStorage.setItem("hiredArtists", JSON.stringify(updatedHiredArtists));

    setModal(!modal);
    route.push("/hiredArtists");
  };

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
          <Input
            placeholder="name"
            event={(e: any) => setName(e.target.value)}
          />
          <Input
            placeholder="Artista"
            event={(e: any) => setArtist(e.target.value)}
          />
          <Input
            placeholder="money"
            event={(e: any) => setMoney(e.target.value)}
          />
          <Input
            placeholder="Event date"
            event={(e: any) => setEventData(e.target.value)}
          />
          <Input
            placeholder="address"
            event={(e: any) => setAddress(e.target.value)}
          />
          <Button title="Enviar" event={hireArtist} />
        </div>
      </div>
    </motion.div>
  );
}

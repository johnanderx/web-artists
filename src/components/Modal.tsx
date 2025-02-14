import React from "react";
import Input from "./Input";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import { useContexts } from "@/hooks/useContext";
import { motion } from "framer-motion";

export default function Modal() {
  const { modal, setModal } = useContexts();
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
          <Button title="Enviar" />
        </div>
      </div>
    </motion.div>
  );
}

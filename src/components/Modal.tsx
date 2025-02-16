import Input from "./Input";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import { useModal } from "@/hooks/useContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useArtist } from "@/hooks/useArtist";
import { modalVariants } from "@/anim/modal";
import { storage } from "@/storage/localStorage";
export default function Modal() {
  const route = useRouter();
  const { modal, setModal } = useModal();
  const {
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
  } = useArtist();

  const hireArtist = () => {
    const formData = { name, artist, money, eventData, address };
    const updatedHiredArtists = [...hiredArtists, formData];
    setHiredArtists(updatedHiredArtists);
    storage.save("hiredArtists", updatedHiredArtists);
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
          <form className="flex flex-col gap-4" action="#">
            <Input
              type="text"
              placeholder="name"
              event={(e: any) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Artist"
              event={(e: any) => setArtist(e.target.value)}
            />
            <Input
              type="number"
              placeholder="money"
              event={(e: any) => setMoney(e.target.value)}
            />
            <Input
              type="date"
              placeholder="Event date"
              event={(e: any) => setEventData(e.target.value)}
            />
            <Input
              type="text"
              placeholder="address"
              event={(e: any) => setAddress(e.target.value)}
            />
            <div className="flex gap-2 justify-end">
              <Button title="Cancel" event={() => setModal(!modal)} />
              <Button title="Send" event={hireArtist} />
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

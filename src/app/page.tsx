import ListArtist from "@/components/ListArtist";
import { ToastContainer } from "react-toastify";
export default function Artists() {
  return (
    <main className="flex flex-col items-center mt-4">
      <ListArtist />
      <ToastContainer />
    </main>
  );
}

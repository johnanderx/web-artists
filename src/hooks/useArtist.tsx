import { useContext } from "react";
import { ArtistContext } from "@/context/ArtistContext";
export const useArtist = () => {
  const context = useContext(ArtistContext);
  return context;
};

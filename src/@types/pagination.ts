import { Track } from "./artist";

export type PaginationContextType = {
  tracks: Track[];
  setTracks: React.Dispatch<React.SetStateAction<Track[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

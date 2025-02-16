export type Artist = {
  id: number;
  name: string;
  picture_medium: string;
};

type Album = {
  id: number;
  title: string;
  cover_medium: string;
};

export type Track = {
  id: number;
  title: string;
  artist: Artist;
  album: Album;
  duration: number;
  link: string;
  preview: string;
  explicit_lyrics: boolean;
};

export type HiredArtistType = {
  name: string;
  artist: string;
  money: number;
  eventData: string;
  address: string;
};

export type ArtistContextType = {
  hiredArtists: HiredArtistType[];
  setHiredArtists: React.Dispatch<React.SetStateAction<HiredArtistType[]>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  artist: string;
  setArtist: React.Dispatch<React.SetStateAction<string>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  eventData: string;
  setEventData: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  selectedArtist: string;
  setSelectedArtist: React.Dispatch<React.SetStateAction<string>>;
};

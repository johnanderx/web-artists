type Artist = {
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

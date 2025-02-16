export const storage = {
  save: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get: (key: string) => {
    const storedHiredArtists = localStorage.getItem("hiredArtists");
    return storedHiredArtists;
  },
};

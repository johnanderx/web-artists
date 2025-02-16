export const storage = {
  save: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get: (key: string) => {
    const storedHiredArtists = localStorage.getItem(key);
    return storedHiredArtists;
  },
};

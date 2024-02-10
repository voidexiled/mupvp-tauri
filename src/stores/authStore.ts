import { create } from "zustand";
import { AuthStore } from "./types";



export const useAuthStore = create<AuthStore>((set) => ({
  name: "",
  rank: "",
  key: "",
  loggedIn: false,
  setKey: (key) => set({ key }),
  setLoggedIn: (loggedIn) => set({ loggedIn }),
  setName: (name) => set({ name }),
  setRank: (rank) => set({ rank }),
}));

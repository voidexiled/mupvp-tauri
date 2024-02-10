import { create } from "zustand";
import { UsersToolsStore, type UserTool } from "./types";
import { USERTOOLS } from "../constants/constants";
export const useUsersToolsStore = create<UsersToolsStore>((set) => ({
  tool: USERTOOLS[0],
  tools: USERTOOLS,
  setTool: (tool: UserTool) => set({ tool }),
}));

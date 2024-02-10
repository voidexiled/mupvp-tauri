import { create } from "zustand";
import { BasicStore } from "./types";
import { TOOLS } from "../constants/constants";

export const useBasicStore = create<BasicStore>((set) => ({
  tool: TOOLS[0],
  tools: TOOLS,
  setTool: (tool) => set({ tool }),
  onTop: false,
  setOnTop: (onTop) => set({ onTop }),
}));

import { create } from "zustand";

type activeType = {
  active: string;
  setActiveContent: (data: string) => void;
};
const useStore = create<activeType>()((set) => ({
  active: "player",
  setActiveContent: (data) => set({ active: data }),
}));

export const useActiveContent = () => {
  const { active, setActiveContent } = useStore();
  return { active, setActiveContent };
};

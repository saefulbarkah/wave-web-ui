import { gameConfig } from "@/const/gameconfig";
import { GameConfig } from "@/interfaces/settings";
import API from "@/lib/axios";
import { AxiosResponse } from "axios";
import { create } from "zustand";

type gameType = {
  settings: GameConfig;
  isFetching: boolean;
  setFetching: (status: boolean) => void;
  fetchSetting: () => void;
  setGameSetting: ({ name, status }: { name: string; status: boolean }) => void;
};

const useGameSettingState = create<gameType>()((set) => ({
  settings: gameConfig,
  isFetching: true,
  setFetching: (status) => set({ isFetching: status }),
  fetchSetting: async () => {
    try {
      const getSetting = await API.get("/settings");
      set({ isFetching: false });
      set((state) => {
        return {
          settings: { ...state.settings, ...getSetting.data },
          isFetching: false,
        };
      });
    } catch (error) {
      console.log(error);
      const response = await API.get("/settings/create");
      set((state) => {
        return {
          settings: { ...state.settings, ...response.data },
          isFetching: false,
        };
      });
    }
  },
  setGameSetting: ({ name, status }) =>
    set((state) => ({
      settings: { ...state.settings, [name]: status },
    })),
}));

export const useGameSettings = () => {
  const { isFetching, setFetching, fetchSetting, settings, setGameSetting } = useGameSettingState();

  const updateGameSetting = async ({
    name,
    status,
  }: {
    name: string | null;
    status: boolean | null;
  }) => {
    if (!name || status === null) return;
    setGameSetting({ name, status });

    try {
      await API.post("/settings/update", { name, status });
    } catch (error) {
      console.log(error);
    }
  };

  const createDefaultSetting = async (): Promise<AxiosResponse<GameConfig>> => {
    const response = await API.get("/settings/create");
    if (response.status === 200) {
      setFetching(false);
    }
    return response;
  };

  return { updateGameSetting, settings, fetchSetting, createDefaultSetting, isFetching };
};

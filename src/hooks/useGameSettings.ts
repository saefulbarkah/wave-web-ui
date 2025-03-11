import { GameConfig } from "@/interfaces/settings";
import API from "@/lib/axios";
import { AxiosResponse } from "axios";
import { create } from "zustand";

type gameType = {
  isFetching: boolean;
  setFetching: (status: boolean) => void;
};

const useGameSettingState = create<gameType>()((set) => ({
  isFetching: true,
  setFetching: (status) => set({ isFetching: status }),
}));

export const useGameSettings = () => {
  const { isFetching, setFetching } = useGameSettingState();
  const updateGameSetting = async ({
    name,
    status,
  }: {
    name: string | null;
    status: boolean | null;
  }) => {
    if (!name || status === null) return;
    try {
      await API.post("/settings/update", { name, status });
      console.log("Data updated!");
    } catch (error) {
      console.log(error);
    }
  };

  const getGameSetting = async (): Promise<AxiosResponse<GameConfig>> => {
    const response = await API.get("/settings");
    if (response.status === 200) {
      setFetching(false);
    }
    return response;
  };

  const createDefaultSetting = async (): Promise<AxiosResponse<GameConfig>> => {
    const response = await API.get("/settings/create");
    if (response.status === 200) {
      setFetching(false);
    }
    return response;
  };

  return { updateGameSetting, getGameSetting, createDefaultSetting, isFetching };
};

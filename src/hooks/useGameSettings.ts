import API from "@/lib/axios";

export const useGameSettings = () => {
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

  const getGameSetting = async () => {
    const response = await API.get("/settings");
    const data = await response.data;
    return data;
  };

  return { updateGameSetting, getGameSetting };
};

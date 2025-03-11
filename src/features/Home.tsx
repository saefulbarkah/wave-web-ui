"use client";

import { useGameSettings } from "@/hooks/useGameSettings";
import { useActiveContent } from "../hooks/useActiveContent";
import { Player } from "./content/Player";
import { GameConfig } from "@/interfaces/settings";
import React from "react";

export const Home = () => {
  const [settings, setSettings] = React.useState<GameConfig>();

  const { active } = useActiveContent();
  const { getGameSetting, isFetching, createDefaultSetting } = useGameSettings();

  const fetchData = async () => {
    const data = await getGameSetting();
    if (data.status === 200) {
      return setSettings(data.data);
    }
    const sett = await createDefaultSetting();
    return setSettings(sett.data);
  };

  React.useEffect(() => {
    fetchData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="mx-5 my-5">
      {isFetching ? (
        <div className="fixed inset-0 z-50 bg-black/50 h-full w-full pointer-events-none">
          <div className="flex items-center justify-center w-full h-full">
            <p>Loading ...</p>
          </div>
        </div>
      ) : null}
      {active === "player" ? <Player settings={settings} /> : null}
      {active === "world" ? <Player settings={settings} /> : null}
      {active === "misc" ? <Player settings={settings} /> : null}
    </div>
  );
};

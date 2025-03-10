"use client";

import { useGameSettings } from "@/hooks/useGameSettings";
import { useActiveContent } from "../hooks/useActiveContent";
import { Player } from "./content/Player";
import { GameConfig } from "@/interfaces/settings";
import React from "react";

export const Home = () => {
  const [settings, setSettings] = React.useState<GameConfig>();

  const { active } = useActiveContent();
  const { getGameSetting } = useGameSettings();

  React.useEffect(() => {
    getGameSetting().then((res) => setSettings(res));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className="mx-5 my-5">
      {active === "player" ? <Player settings={settings} /> : null}
      {active === "world" ? <Player settings={settings} /> : null}
      {active === "misc" ? <Player settings={settings} /> : null}
    </div>
  );
};

import { Checkbox } from "@/components/Checkbox";
import { useGameSettings } from "@/hooks/useGameSettings";
import { GameConfig } from "@/interfaces/settings";
import React from "react";

export const Player = ({ settings }: { settings: GameConfig | undefined }) => {
  const { updateGameSetting } = useGameSettings();
  const handleToggle = (el: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    updateGameSetting({ name: el.currentTarget.name, status: el.currentTarget.checked });
  };
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Checkbox name="GodMode" defaultChecked={settings?.GodMode} onClick={handleToggle} />
          <p>God Mode</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox name="NoCD" defaultChecked={settings?.NoCD} onClick={handleToggle} />
          <p>No Cooldown</p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

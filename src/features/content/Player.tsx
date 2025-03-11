import { Checkbox } from "@/components/Checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useGameSettings } from "@/hooks/useGameSettings";
import { GameConfig } from "@/interfaces/settings";
import React from "react";

type indexingSetting = keyof GameConfig;

type playerMenu = {
  label: string;
  name: indexingSetting;
};

const playerMenu: playerMenu[] = [
  {
    label: "God Mode",
    name: "GodMode",
  },
  {
    label: "No Cooldown",
    name: "NoCD",
  },
  {
    label: "Always Critical Hit",
    name: "AlwaysCrit",
  },
  {
    label: "No Clip",
    name: "NoClip",
  },
];

export const Player = () => {
  const { updateGameSetting, settings } = useGameSettings();
  const handleToggle = (el: React.ChangeEvent<HTMLInputElement>) => {
    updateGameSetting({ name: el.currentTarget.name, status: el.currentTarget.checked });
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Player</h2>
          {playerMenu.map((item, i) => (
            <Card className="bg-box text-white border-none p-4" key={i}>
              <CardContent className="p-0">
                <div className="flex items-center gap-2 justify-between">
                  <p className="font-semibold">{item.label}</p>
                  <Checkbox
                    name={item.name}
                    checked={settings[item.name] ? true : false}
                    onChange={handleToggle}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Player</h2>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useGameSettings } from "@/hooks/useGameSettings";
import { useActiveContent } from "../hooks/useActiveContent";
import { Player } from "./content/Player";
import React, { useEffect } from "react";

export const Home = () => {
  const { active } = useActiveContent();
  const { isFetching, fetchSetting } = useGameSettings();

  useEffect(() => {
    fetchSetting();
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
      {active === "player" ? <Player /> : null}
      {active === "world" ? <Player /> : null}
      {active === "misc" ? <Player /> : null}
    </div>
  );
};

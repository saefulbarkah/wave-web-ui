"use client";
import React from "react";
import { useActiveContent } from "../hooks/useActiveContent";

const Route = [{ name: "player" }, { name: "world" }, { name: "misc" }];

export const Sidenav = () => {
  const { setActiveContent, active } = useActiveContent();
  const onClickNav = (item: string) => {
    setActiveContent(item);
  };

  return (
    <aside className="sticky top-0 min-w-42 border-r border-white/15">
      <nav className="flex items-center flex-col px-5 py-5 gap-2">
        {Route.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onClickNav(item.name)}
            className={`w-full py-1 capitalize font-semibold rounded ${
              active === item.name ? "bg-primary" : "bg-white/5"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

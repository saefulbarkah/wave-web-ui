import { gameConfig } from "@/const/gameconfig";
import { GameConfig } from "@/interfaces/settings";
import fs from "fs";

export async function GET() {
  let settings: GameConfig | null = null;
  try {
    const data = fs.readFileSync("./public/settings.json", "utf-8");
    settings = JSON.parse(data);
  } catch (error) {
    console.log(error);
  }

  const data = settings ? settings : gameConfig;
  fs.writeFileSync("./public/settings.json", JSON.stringify(data, null));
  return Response.json(data);
}

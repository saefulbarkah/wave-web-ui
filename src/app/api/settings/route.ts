import fs from "fs";

export async function GET() {
  try {
    const data = fs.readFileSync("./public/settings.json", "utf-8");
    return Response.json(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
}

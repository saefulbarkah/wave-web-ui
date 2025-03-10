import fs from "fs";

type requestType = {
  name: string;
  status: boolean;
};

export async function POST(request: Request) {
  try {
    const req: requestType = await request.json();
    const settigs = fs.readFileSync("./public/settings.json", "utf-8");
    const data = JSON.parse(settigs);
    data[req.name] = req.status;
    fs.writeFileSync("./public/settings.json", JSON.stringify(data), "utf-8");
    return Response.json(
      {
        response: `Config ${req.name} was changed to ${req.status}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    Response.json(error, { status: 500 });
  }
}

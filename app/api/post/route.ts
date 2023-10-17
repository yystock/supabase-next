import { type NextRequest, NextResponse } from "next/server";
// import log from "@/lib/logger";

export async function GET(req: NextRequest) {
  try {
    const data = await req.json();

    if (data) {
      console.info("data is here", data);
    } else {
      console.error("data is not here");
    }

    return NextResponse.redirect(new URL("/", req.url), {
      status: 200,
    });
  } catch (error) {
    console.error("server error");
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

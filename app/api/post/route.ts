import { type NextRequest, NextResponse } from "next/server";
import log from "@/lib/logger";

export async function GET(req: NextRequest) {
  try {
    const data = await req.json();

    if (data) {
      log.info("data is here", data);
    } else {
      log.error("data is not here");
    }

    return NextResponse.redirect(new URL("/", req.url), {
      status: 200,
    });
  } catch (error) {
    log.error("server error");
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

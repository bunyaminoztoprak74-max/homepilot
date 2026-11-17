import { NextResponse } from "next/server";
import { buildBluettiCjUrl } from "@/lib/bluettiAffiliates";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const url = new URL(request.url);
  const srcParam = url.searchParams.get("src") ?? "";
  const referer = (request.headers.get("referer") ?? "").toLowerCase();
  const countryCode = request.headers.get("x-vercel-ip-country") ?? "US";

  // Route web calculator clicks via Website PID (101761537) and direct YouTube description clicks via GridSpec Lab YouTube PID (101930704)
  const isCalculatorClick =
    srcParam === "calc" || referer.includes("homepilot-iota.vercel.app");

  const target = buildBluettiCjUrl(slug, isCalculatorClick, countryCode);

  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}

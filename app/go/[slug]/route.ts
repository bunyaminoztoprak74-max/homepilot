import { NextResponse } from "next/server";
import { BLUETTI_REDIRECTS } from "@/lib/bluettiAffiliates";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const target = BLUETTI_REDIRECTS[slug.toLowerCase()] ?? BLUETTI_REDIRECTS["bluetti-5off"];
  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex, nofollow"
    }
  });
}

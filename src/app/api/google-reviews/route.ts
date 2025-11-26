import { NextResponse } from "next/server";

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET() {
  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json({ error: "Google Places env vars missing" }, { status: 503 });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", PLACE_ID);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("reviews_no_translations", "false");
  url.searchParams.set("language", "pl");
  url.searchParams.set("key", API_KEY);

  const response = await fetch(url.toString(), {
    // Cache upstream for an hour to limit API quota use
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to reach Google Places" }, { status: 502 });
  }

  const data = await response.json();
  const reviews = Array.isArray(data?.result?.reviews) ? data.result.reviews : [];

  const mapped = reviews
    .slice(0, 8)
    .map((r: any) => ({
      name: r?.author_name ?? "Anonim",
      date: r?.time
        ? new Date(Number(r.time) * 1000).toLocaleDateString("pl-PL", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : "",
      text: r?.text ?? "",
      url: typeof r?.author_url === "string" ? r.author_url : undefined,
      rating: Number(r?.rating) || 5,
    }))
    .filter((r: { text: string }) => r.text);

  return NextResponse.json({ reviews: mapped });
}

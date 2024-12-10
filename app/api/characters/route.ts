import { NextResponse } from "next/server";

const API_URL = "https://rickandmortyapi.com/api/character/";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const status = searchParams.get("status") || "";
  const gender = searchParams.get("gender") || "";

  const params = new URLSearchParams({
    page,
    status,
    gender,
  });

  try {
    const res = await fetch(`${API_URL}?${params}`);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch characters" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || "Internal Server Error" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}

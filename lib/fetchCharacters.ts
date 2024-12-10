const BASE_URL = "http://localhost:3000";
export async function fetchCharacters(page = 1, filters: Record<string, string> = {}) {
  const params = new URLSearchParams({ page: page.toString(), ...filters });
  const res = await fetch(`${BASE_URL}/api/characters?${params}`);

  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
}

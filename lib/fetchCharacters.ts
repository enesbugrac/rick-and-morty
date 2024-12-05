const API_URL = "https://rickandmortyapi.com/api/character/"

export async function fetchCharacters(page = 1, filters: Record<string, string> = {}) {
    const params = new URLSearchParams({ page: page.toString(), ...filters });
    const res = await fetch(`${API_URL}?${params}`);
    
    if (!res.ok) throw new Error("Failed to fetch characters");
    return res.json();
}
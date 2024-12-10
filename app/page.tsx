import { fetchCharacters } from "@/lib/fetchCharacters";
import CharacterCard from "@/components/CharacterCard";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import { setFilters, store } from "@/redux/store";
import { Character } from "@/types";

export const dynamic = "force-dynamic"; // SSR için zorunlu dinamik sayfa

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; status?: string; gender?: string };
}) {
  const { page = "1", status = "", gender = "" } = await searchParams;

  // Redux durumunu sunucu tarafında başlat
  store.dispatch(
    setFilters({
      status,
      gender,
      page: Number(page),
    })
  );

  const data = await fetchCharacters(Number(page), { status, gender });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Rick and Morty Characters</h1>
      <Filters /> {/* Redux durumundan filtreler yönetilir */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        currentPage={Number(page)}
        totalPages={data.info.pages}
        filters={{ status, gender }}
      />
    </div>
  );
}

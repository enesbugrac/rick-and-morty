import CharacterCard, { Character } from "@/components/CharacterCard";
import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import { fetchCharacters } from "@/lib/fetchCharacters";

export default async function Home({ searchParams }: { searchParams: {page:string,status:string,gender:string} }) {
  const {page = "1",status,gender} = await searchParams
  

  const data = await fetchCharacters(+page, { status:status || "", gender:gender || "" });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Rick and Morty Characters
      </h1>
      <Filters currentFilters={{ status, gender }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination currentPage={+page} totalPages={data.info.pages} filters={{ status:status || "", gender:gender || "" }} />
    </div>
  );
}

import { Character } from "@/types";
import Image from "next/image";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <Image
        src={character.image}
        alt={character.name}
        className="w-full h-auto"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
      </div>
    </div>
  );
}

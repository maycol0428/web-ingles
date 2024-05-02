import { PrepositionCard } from "@/app/components/PrepositionCard";
import { prepositions } from "@/data/preposition";
import React from "react";
export default function Page({ params }: { params: { id: string } }) {
  const id = params?.id;
  let idDecoded = decodeURIComponent(id);

  const preposition = prepositions.find((p) => p.word === idDecoded);

  if (!preposition) {
    return <span>No hay resultado</span>;
  }

  const { phonetic, spanish, word } = preposition;

  return (
    <main className="p-5 max-w-md m-auto">
      <div
        style={{
          viewTransitionName: `preposition__${word}`,
        }}
      >
        <PrepositionCard phonetic={phonetic} spanish={spanish} word={word} />
      </div>
    </main>
  );
}

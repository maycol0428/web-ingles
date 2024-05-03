import { PrepositionCard } from "@/app/components/PrepositionCard";
import { prepositions } from "@/data/preposition";
import React from "react";
import { PrepositionDetailCard } from "../components/PrepositionDetailCard";
export default function Page({ params }: { params: { id: string } }) {
  const id = params?.id;
  let idDecoded = decodeURIComponent(id);

  const preposition = prepositions.find((p) => p.word === idDecoded);

  if (!preposition) {
    return <span>No hay resultado</span>;
  }

  const { phonetic, spanish, word } = preposition;

  return (
    <main className="p-5">
      <PrepositionDetailCard {...{ phonetic, spanish, word }} />
    </main>
  );
}

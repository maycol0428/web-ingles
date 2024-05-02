"use client";
import React from "react";
import { Link } from "next-view-transitions";
import styles from "./PrepositionCard.module.css";
interface Props {
  word: string;
  phonetic: string;
  spanish: string;
}

export const PrepositionCard = ({ word, phonetic, spanish }: Props) => {
  return (
    <Link
      className={styles.card}
      href={`/preposition/${word}`}
      rel="noopener noreferrer"
    >
      <h2>
        {word} <span>-&gt;</span>
      </h2>
      <p>{phonetic}</p>
      <p>{spanish}</p>
    </Link>
  );
};

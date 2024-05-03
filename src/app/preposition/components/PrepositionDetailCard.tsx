"use client";
import React from "react";
import styles from "./PrepositionDetailCard.module.css";

interface Props {
  word: string;
  phonetic: string;
  spanish: string;
}

export const PrepositionDetailCard = ({ word, phonetic, spanish }: Props) => {
  return (
    <div
      className={styles.PrepositionDetailCard}
      style={{
        viewTransitionName: `preposition__${word}`,
      }}
    >
      <h2
        style={{
          viewTransitionName: `preposition__word__${word}`,
        }}
      >
        {word}
      </h2>
      <p
        style={{
          viewTransitionName: `preposition__phonetic__${word}`,
        }}
      >
        {phonetic}
      </p>
      <p
        style={{
          viewTransitionName: `preposition__spanish__${word}`,
        }}
      >
        {spanish}
      </p>
      <p
        style={{
          viewTransitionName: `preposition__desc__${word}`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque,
        possimus velit enim vero unde non soluta corrupti, necessitatibus
        voluptate, itaque asperiores perferendis. Maxime repudiandae, assumenda
        hic quis placeat nobis.
      </p>
    </div>
  );
};

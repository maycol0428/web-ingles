import React from 'react'
import styles from "../page.module.css";
import { Link } from "next-view-transitions";

interface Props {
    word: string
    phonetic: string
    spanish: string
}

export const PrepositionCard = ({ word, phonetic, spanish }: Props) => {
    return (
        <Link
            href={`/preposition/${word}`}
            className={`${styles.card} bg-slate-900 rounded-lg`}
            rel="noopener noreferrer"
        >
            <h2>
                {word} <span>-&gt;</span>
            </h2>
            <p>{phonetic}</p>
            <p>{spanish}</p>
        </Link>
    )
}

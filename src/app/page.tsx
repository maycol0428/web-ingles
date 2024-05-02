import { Grid } from "@/components/grids/Grid";
import { PrepositionCard } from "./components/PrepositionCard";
import { prepositions } from "@/data/preposition";

export default function Home() {
  return (
    <main className="p-5">
      <div>
        <p>
          The 100 most used <code>prepositions</code>
        </p>
      </div>

      <br />

      <Grid>
        {prepositions.map(({ word, spanish, phonetic }, i) => (
          <div
            key={i}
            style={{
              viewTransitionName: `preposition__${word}`,
            }}
          >
            <PrepositionCard
              spanish={spanish}
              word={word}
              phonetic={phonetic}
            />
          </div>
        ))}
      </Grid>
    </main>
  );
}

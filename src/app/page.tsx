import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const prepositions = [
  { word: "about", spanish: "acerca de", phonetic: "əˈbaʊt" },
  { word: "above", spanish: "encima de", phonetic: "əˈbʌv" },
  { word: "across", spanish: "a través de", phonetic: "əˈkrɒs" },
  { word: "after", spanish: "después de", phonetic: "ˈæftər" },
  { word: "against", spanish: "contra", phonetic: "əˈɡɛnst" },
  { word: "along", spanish: "a lo largo de", phonetic: "əˈlɔŋ" },
  { word: "amid", spanish: "en medio de", phonetic: "əˈmɪd" },
  { word: "among", spanish: "entre", phonetic: "əˈmʌŋ" },
  { word: "around", spanish: "alrededor de", phonetic: "əˈraʊnd" },
  { word: "as", spanish: "como", phonetic: "əz" },
  { word: "at", spanish: "en", phonetic: "æt" },
  { word: "before", spanish: "antes de", phonetic: "bɪˈfɔr" },
  { word: "behind", spanish: "detrás de", phonetic: "bɪˈhaɪnd" },
  { word: "below", spanish: "debajo de", phonetic: "bɪˈloʊ" },
  { word: "beneath", spanish: "debajo de", phonetic: "bɪˈniːθ" },
  { word: "beside", spanish: "al lado de", phonetic: "bɪˈsaɪd" },
  { word: "between", spanish: "entre", phonetic: "bɪˈtwiːn" },
  { word: "beyond", spanish: "más allá de", phonetic: "biˈjɒnd" },
  { word: "but", spanish: "pero", phonetic: "bət" },
  { word: "by", spanish: "por", phonetic: "baɪ" },
  { word: "concerning", spanish: "en lo que respecta a", phonetic: "kənˈsɜrnɪŋ" },
  { word: "considering", spanish: "considerando", phonetic: "kənˈsɪdərɪŋ" },
  { word: "despite", spanish: "a pesar de", phonetic: "dɪˈspaɪt" },
  { word: "down", spanish: "abajo", phonetic: "daʊn" },
  { word: "during", spanish: "durante", phonetic: "ˈdʊrɪŋ" },
  { word: "except", spanish: "excepto", phonetic: "ɪkˈsɛpt" },
  { word: "for", spanish: "para", phonetic: "fɔr" },
  { word: "from", spanish: "desde", phonetic: "frəm" },
  { word: "in", spanish: "en", phonetic: "ɪn" },
  { word: "inside", spanish: "dentro de", phonetic: "ˈɪnsaɪd" },
  { word: "into", spanish: "en", phonetic: "ˈɪntuː" },
  { word: "like", spanish: "como", phonetic: "laɪk" },
  { word: "near", spanish: "cerca de", phonetic: "nɪr" },
  { word: "of", spanish: "de", phonetic: "ʌv" },
  { word: "off", spanish: "apagado", phonetic: "ɒf" },
  { word: "on", spanish: "en", phonetic: "ɒn" },
  { word: "onto", spanish: "en", phonetic: "ˈɒntuː" },
  { word: "out", spanish: "fuera", phonetic: "aʊt" },
  { word: "outside", spanish: "fuera", phonetic: "ˈaʊtˌsaɪd" },
  { word: "over", spanish: "sobre", phonetic: "ˈoʊvər" },
  { word: "past", spanish: "pasado", phonetic: "pæst" },
  { word: "regarding", spanish: "con respecto a", phonetic: "rɪˈɡɑrdɪŋ" },
  { word: "round", spanish: "redondo", phonetic: "raʊnd" },
  { word: "since", spanish: "desde", phonetic: "sɪns" },
  { word: "through", spanish: "a través de", phonetic: "θruː" },
  { word: "throughout", spanish: "a lo largo de todo", phonetic: "θruːˈaʊt" },
  { word: "till", spanish: "hasta", phonetic: "tɪl" },
  { word: "to", spanish: "a", phonetic: "tuː" },
  { word: "toward", spanish: "hacia", phonetic: "təˈwɔrd" },
  { word: "under", spanish: "debajo de", phonetic: "ˈʌndər" },
  { word: "underneath", spanish: "debajo de", phonetic: "ˌʌndərˈniːθ" },
  { word: "until", spanish: "hasta", phonetic: "ənˈtɪl" },
  { word: "unto", spanish: "a", phonetic: "ˈʌntuː" },
  { word: "up", spanish: "arriba", phonetic: "ʌp" },
  { word: "upon", spanish: "sobre", phonetic: "əˈpɒn" },
  { word: "with", spanish: "con", phonetic: "wɪθ" },
  { word: "within", spanish: "dentro de", phonetic: "wɪˈðɪn" },
  { word: "without", spanish: "sin", phonetic: "wɪˈðaʊt" },
  { word: "according to", spanish: "según", phonetic: "əˈkɔrdɪŋ tuː" },
  { word: "across from", spanish: "enfrente de", phonetic: "əˈkrɒs frəm" },
  { word: "along with", spanish: "junto con", phonetic: "əˈlɔŋ wɪð" },
  { word: "apart from", spanish: "aparte de", phonetic: "əˈpɑrt frəm" },
  { word: "as for", spanish: "en cuanto a", phonetic: "æz fɔr" },
  { word: "as of", spanish: "a partir de", phonetic: "æz ʌv" },
  { word: "aside from", spanish: "aparte de", phonetic: "əˈsaɪd frəm" },
  { word: "because of", spanish: "debido a", phonetic: "bɪˈkɔz ʌv" },
  { word: "by means of", spanish: "por medio de", phonetic: "baɪ miːnz ʌv" },
  { word: "close to", spanish: "cerca de", phonetic: "kloʊs tuː" },
  { word: "due to", spanish: "debido a", phonetic: "duː tuː" },
  { word: "except for", spanish: "excepto por", phonetic: "ɪkˈsɛpt fɔr" },
  { word: "in addition to", spanish: "además de", phonetic: "ɪn əˈdɪʃən tuː" },
  { word: "in front of", spanish: "en frente de", phonetic: "ɪn frʌnt ʌv" },
  { word: "in place of", spanish: "en lugar de", phonetic: "ɪn pleɪs ʌv" },
  { word: "in spite of", spanish: "a pesar de", phonetic: "ɪn spaɪt ʌv" },
  { word: "instead of", spanish: "en lugar de", phonetic: "ɪnˈstɛd ʌv" },
  { word: "next to", spanish: "al lado de", phonetic: "nɛkst tuː" },
  { word: "on account of", spanish: "debido a", phonetic: "ɒn əˈkaʊnt ʌv" },
  { word: "on behalf of", spanish: "en nombre de", phonetic: "ɒn bɪˈhæf ʌv" },
  { word: "on top of", spanish: "encima de", phonetic: "ɒn tɒp ʌv" },
  { word: "out of", spanish: "fuera de", phonetic: "aʊt ʌv" },
  { word: "owing to", spanish: "debido a", phonetic: "ˈoʊɪŋ tuː" },
  { word: "prior to", spanish: "antes de", phonetic: "ˈpraɪər tuː" },
  { word: "pursuant to", spanish: "de acuerdo con", phonetic: "pərˈsuənt tuː" },
  { word: "regardless of", spanish: "independientemente de", phonetic: "rɪˈɡɑrdlɪs ʌv" },
  { word: "thanks to", spanish: "gracias a", phonetic: "θæŋks tuː" },
  { word: "with regard to", spanish: "con respecto a", phonetic: "wɪð rɪˈɡɑrd tuː" },
  { word: "with respect to", spanish: "con respecto a", phonetic: "wɪð rɪˈspɛkt tuː" },
  { word: "alongside", spanish: "junto a", phonetic: "əˈlɔŋˌsaɪd" },
  { word: "below", spanish: "por debajo de", phonetic: "bɪˈloʊ" },
  { word: "down from", spanish: "abajo de", phonetic: "daʊn frəm" },
  { word: "inside of", spanish: "dentro de", phonetic: "ˈɪnˌsaɪd ʌv" },
  { word: "near to", spanish: "cerca de", phonetic: "nɪr tuː" },
  { word: "out from", spanish: "fuera de", phonetic: "aʊt frəm" },
  { word: "round about", spanish: "alrededor de", phonetic: "raʊnd əˈbaʊt" },
  { word: "up to", spanish: "hasta", phonetic: "ʌp tuː" },
  { word: "as per", spanish: "según", phonetic: "æz pər" },
  { word: "as regards", spanish: "en lo que respecta a", phonetic: "æz rɪˈɡɑrdz" },
  { word: "as to", spanish: "en cuanto a", phonetic: "æz tuː" },
  { word: "away from", spanish: "lejos de", phonetic: "əˈweɪ frəm" }
];


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          The 100 most used{" "}
          <code className={styles.code}>prepositions</code>
        </p>
      </div>

      <br />

      <div className={styles.grid}>
        {
          prepositions.map(item => {
            return <Link
              href={`/word/${item.word}`}
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2>
                {item.word} <span>-&gt;</span>
              </h2>
              <p>{item.phonetic}</p>
              <p>{item.spanish}</p>
            </Link>
          })
        }
      </div>
    </main>
  );
}

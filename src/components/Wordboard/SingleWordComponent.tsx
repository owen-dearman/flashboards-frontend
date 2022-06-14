import { fullwordData } from "../../utils/interfaces";
import useSound from "use-sound";
import { dateFormatter } from "../../utils/dateFormatter";
import { wordFormatter } from "../../utils/wordFormatter";

interface SingleWordComponentProps {
  data: fullwordData;
}

export function SingleWordComponent({
  data,
}: SingleWordComponentProps): JSX.Element {
  const [playSound] = useSound(data.audio);

  return (
    <div className="singleWordFullCard" data-status={data.meanings[0].pos}>
      <h1 className="faveWordTitle">{wordFormatter(data.word)}</h1>
      <h3 className="faveWordSubtitle">
        Uploaded by {data.username} on <br></br>{" "}
        {dateFormatter(data.date_added)}
      </h3>
      <h2 className="faveWordPhonetics">{data.phonetics}</h2>
      {data.syllables && (
        <h3 className="faveWordSubtitle">Syllables: {data.syllables}</h3>
      )}
      <ol>
        {data.meanings.map((m) => (
          <li key={m.id}>
            ({m.pos}) {m.meaning}
          </li>
        ))}
      </ol>
      {data.synonyms && (
        <>
          <h2 className="faveWordSubtitle">Synonyms</h2>
          <div className="faveWordSynonymContainer">
            {data.synonyms.map((s) => (
              <div className="faveWordSynonym" key={s.id}>
                {s.word}
              </div>
            ))}
          </div>
        </>
      )}
      {data.freq && (
        <h3 className="faveWordSubtitle">
          Typically used {data.freq.toFixed(3)} times per 1 million words
        </h3>
      )}
      {data.audio && (
        <button className="faveWordButton" onClick={() => playSound()}>
          🔊
        </button>
      )}
      {data.url && (
        <a
          className="faveWordLink"
          href={data.url}
          target="_blank"
          rel="noreferrer"
        >
          More Info on {data.word}
        </a>
      )}
    </div>
  );
}

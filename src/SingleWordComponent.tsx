import { fullwordData } from "./utils/interfaces";
import useSound from "use-sound";
import { dateFormatter } from "./utils/dateFormatter";

interface SingleWordComponentProps {
  data: fullwordData;
}

export function SingleWordComponent({
  data,
}: SingleWordComponentProps): JSX.Element {
  const [playSound] = useSound(data.audio);

  return (
    <div>
      <h1>{data.word}</h1>
      <h3>
        Uploaded By {data.username} on {dateFormatter(data.date_added)}
      </h3>
      <h2>{data.phonetics}</h2>
      {data.syllables && <h3>Syllables: {data.syllables}</h3>}
      {data.audio && (
        <button onClick={() => playSound()}>Pronounce {data.word}</button>
      )}
      <div>
        {data.meanings.map((m) => (
          <p key={m.id}>
            ({m.pos}) {m.meaning}
          </p>
        ))}
      </div>
      <h2>Synonyms</h2>
      {data.synonyms && (
        <div>
          {data.synonyms.map((s) => (
            <p key={s.id}>{s.word}</p>
          ))}
        </div>
      )}
      {data.freq && (
        <h3>Typically used {data.freq.toFixed(3)} times per 1 million words</h3>
      )}
      {data.url && <a href={data.url}>More Info on {data.word}</a>}
    </div>
  );
}

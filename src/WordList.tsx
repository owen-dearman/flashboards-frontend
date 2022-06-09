import { useEffect, useState } from "react";
import { baseURL } from "./utils/url";
import axios from "axios";
import { fullwordData } from "./utils/interfaces";
import { SingleWordComponent } from "./SingleWordComponent";

export function WordList(): JSX.Element {
  const [words, setWords] = useState<fullwordData[]>([]);

  useEffect(() => {
    async function fetchWords() {
      const dbResponse = await axios.get(baseURL + "/words");
      setWords(dbResponse.data);
    }
    fetchWords();
  });

  const jsxWordList = words.map((word) => (
    <SingleWordComponent key={word.id} data={word} />
  ));
  return (
    <section>
      <div>{jsxWordList}</div>
    </section>
  );
}

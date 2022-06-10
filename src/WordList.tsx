import { useEffect } from "react";
import { baseURL } from "./utils/url";
import axios from "axios";
import { fullwordData } from "./utils/interfaces";
import { SingleWordComponent } from "./SingleWordComponent";
import { Action } from "./utils/StateAndAction";

interface WordListProps {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  dispatch: React.Dispatch<Action>;
}

export function WordList({
  faveWordsData,
  isLoading,
  dispatch,
}: WordListProps): JSX.Element {
  useEffect(() => {
    async function fetchWords() {
      dispatch({ type: "request" });
      const wordResponse = await axios.get(baseURL + "/words");
      const userResponse = await axios.get(baseURL + "/users");
      dispatch({
        type: "fetchWord&UserData",
        wordData: wordResponse.data,
        userData: userResponse.data,
      });
    }
    fetchWords();
  }, [dispatch]);

  const jsxWordList = faveWordsData.map((word) => (
    <SingleWordComponent key={word.id} data={word} />
  ));

  return (
    <>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <section>
          <div className="wordList">{jsxWordList}</div>
        </section>
      )}
    </>
  );
}

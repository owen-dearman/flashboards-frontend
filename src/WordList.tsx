import { Dispatch, useEffect } from "react";
import { baseURL } from "./utils/url";
import axios from "axios";
import { fullwordData } from "./utils/interfaces";
import { SingleWordComponent } from "./SingleWordComponent";
import { Action } from "./utils/StateAndAction";
import { wordFormatter } from "./utils/wordFormatter";

interface WordListProps {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  dispatch: Dispatch<Action>;
  selectedWord: fullwordData | null;
}

export function WordList({
  faveWordsData,
  isLoading,
  dispatch,
  selectedWord,
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

  const faveWordList = faveWordsData.map((word) => (
    <div
      key={word.id}
      data-status={word.meanings[0].pos}
      className="wordListBannerItem"
      onClick={() => {
        word === selectedWord
          ? dispatch({ type: "selectedWord", selectedWord: null })
          : dispatch({ type: "selectedWord", selectedWord: word });
      }}
    >
      <h1>{wordFormatter(word.word)}</h1>
    </div>
  ));

  return (
    <>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <h2>The Community's Favourite Words!</h2>

          <div className="wordListBannerConatiner">{faveWordList}</div>

          {selectedWord && (
            <div className="singleWordFullCardContainer">
              <SingleWordComponent data={selectedWord} />
            </div>
          )}
        </>
      )}
    </>
  );
}

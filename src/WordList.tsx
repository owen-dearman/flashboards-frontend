import { Dispatch } from "react";
import { fullwordData } from "./utils/interfaces";
import { Action } from "./utils/StateAndAction";
import { wordFormatter } from "./utils/wordFormatter";

interface WordListProps {
  faveWordsData: fullwordData[];
  dispatch: Dispatch<Action>;
  selectedWord: fullwordData | null;
  isLoading: boolean;
}

export function WordList({
  faveWordsData,
  dispatch,
  selectedWord,
  isLoading,
}: WordListProps): JSX.Element {
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
        </>
      )}
    </>
  );
}

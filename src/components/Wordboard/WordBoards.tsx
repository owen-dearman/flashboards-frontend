import { Dispatch, useEffect, useState } from "react";
import { fullwordData } from "../../utils/interfaces";
import { SingleWordComponent } from "./SingleWordComponent";
import { Action } from "../../utils/StateAndAction";
import { Link } from "react-router-dom";
import { AddFaveWord } from "./AddFaveWord";
import { WordList } from "./WordList";
import axios from "axios";
import { baseURL } from "../../utils/url";
import { WordboardFilters } from "./WordboardFilters";

interface WordBoardsProps {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  dispatch: Dispatch<Action>;
  selectedWord: fullwordData | null;
}

export function WordBoards({
  faveWordsData,
  isLoading,
  dispatch,
  selectedWord,
}: WordBoardsProps): JSX.Element {
  const [rerender, setRerender] = useState<boolean>(false);

  useEffect(() => {
    async function fetchWords() {
      dispatch({ type: "request" });
      const wordResponse = await axios.get(baseURL + "/words");
      const userResponse = await axios.get(baseURL + "/users");

      dispatch({
        type: "fetchWord&UserData",
        wordData: wordResponse.data.sort((a: fullwordData, b: fullwordData) =>
          a.word.localeCompare(b.word)
        ),
        userData: userResponse.data,
      });
    }
    fetchWords();
  }, [dispatch, rerender]);

  return (
    <>
      <AddFaveWord rerender={setRerender} prevRe={rerender} />
      <h2 style={{ textAlign: "center" }}>The Community's Favourite Words!</h2>
      <WordboardFilters />
      {selectedWord ? (
        <div className="jointContainer">
          <div className="singleContainer1">
            <WordList
              faveWordsData={faveWordsData}
              selectedWord={selectedWord}
              dispatch={dispatch}
              isLoading={isLoading}
            />
          </div>
          <div className="singleContainer2">
            <div className="singleWordFullCardContainer">
              <SingleWordComponent data={selectedWord} />
            </div>
          </div>
        </div>
      ) : (
        <WordList
          faveWordsData={faveWordsData}
          selectedWord={selectedWord}
          dispatch={dispatch}
          isLoading={isLoading}
        />
      )}
      <Link to={"/words/index"}>
        <button>Full Index</button>
      </Link>
    </>
  );
}

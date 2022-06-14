import { Dispatch, useEffect } from "react";
import { fullwordData } from "../../utils/interfaces";
import { SingleWordComponent } from "./SingleWordComponent";
import { Action, SortTypes } from "../../utils/StateAndAction";
import { Link } from "react-router-dom";
import { AddFaveWord } from "./AddFaveWord";
import { WordList } from "./WordList";
import { fetchWords } from "../../utils/fetchWords";

interface WordBoardsProps {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  dispatch: Dispatch<Action>;
  selectedWord: fullwordData | null;
  activeSort: SortTypes;
}

export function WordBoards({
  faveWordsData,
  isLoading,
  dispatch,
  selectedWord,
  activeSort,
}: WordBoardsProps): JSX.Element {
  useEffect(() => {
    async function fetchData() {
      await fetchWords(dispatch);
    }
    fetchData();
  }, [dispatch]);

  function handleSort(sortParam: SortTypes) {
    switch (sortParam) {
      case "alphaAsc":
        faveWordsData.sort((a, b) => a.word.localeCompare(b.word));
        break;
      case "alphaDesc":
        faveWordsData.sort((a, b) => b.word.localeCompare(a.word));
        break;
      case "freqAsc":
        faveWordsData.sort((a, b) => a.freq - b.freq);
        break;
      case "freqDesc":
        faveWordsData.sort((a, b) => b.freq - a.freq);
        break;
    }
    dispatch({ type: "sort", activeSort: sortParam });
  }

  return (
    <>
      <AddFaveWord dispatch={dispatch} />
      <h2 style={{ textAlign: "center" }}>The Community's Favourite Words!</h2>
      <section className="filtersBar">
        <p>Alphabetical</p>
        {activeSort === "alphaAsc" ? (
          <button
            onClick={() => handleSort("alphaAsc")}
            className="sortButtonActive"
          >
            ⬆️
          </button>
        ) : (
          <button onClick={() => handleSort("alphaAsc")} className="sortButton">
            ⬆️
          </button>
        )}
        {activeSort === "alphaDesc" ? (
          <button
            onClick={() => handleSort("alphaDesc")}
            className="sortButtonActive"
          >
            ⬇️
          </button>
        ) : (
          <button
            onClick={() => handleSort("alphaDesc")}
            className="sortButton"
          >
            ⬇️
          </button>
        )}
        <p>Frequency</p>
        {activeSort === "freqAsc" ? (
          <button
            onClick={() => handleSort("freqAsc")}
            className="sortButtonActive"
          >
            ⬆️
          </button>
        ) : (
          <button onClick={() => handleSort("freqAsc")} className="sortButton">
            ⬆️
          </button>
        )}
        {activeSort === "freqDesc" ? (
          <button
            onClick={() => handleSort("freqDesc")}
            className="sortButtonActive"
          >
            ⬇️
          </button>
        ) : (
          <button onClick={() => handleSort("freqDesc")} className="sortButton">
            ⬇️
          </button>
        )}
      </section>
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

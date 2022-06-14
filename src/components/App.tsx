import { useReducer } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { flashboardsReducer } from "../utils/reducerFunc";
import { emptyState } from "../utils/StateAndAction";
import { WordBoards } from "./Wordboard/WordBoards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppIndex } from "./AppIndex";
import { FlashCards } from "./Flashcards/Flashcards";
import { FullIndex } from "./Wordboard/FullIndex";

function App(): JSX.Element {
  const [{ faveWordsData, isLoading, selectedWord }, dispatch] = useReducer(
    flashboardsReducer,
    emptyState
  );

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AppIndex />} />
          <Route
            path="/words"
            element={
              <WordBoards
                faveWordsData={faveWordsData}
                isLoading={isLoading}
                dispatch={dispatch}
                selectedWord={selectedWord}
              />
            }
          />
          <Route
            path="/words/index"
            element={<FullIndex faveWordsData={faveWordsData} />}
          />
          <Route path="/flashcards" element={<FlashCards />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

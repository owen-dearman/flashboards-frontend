import { useReducer } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { flashboardsReducer } from "./utils/reducerFunc";
import { emptyState } from "./utils/StateAndAction";
import { WordList } from "./WordList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppIndex } from "./AppIndex";
import { FlashCards } from "./Flashcards";
import { FullIndex } from "./FullIndex";

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
              <WordList
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

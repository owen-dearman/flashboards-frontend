import { useReducer } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { flashboardsReducer } from "./utils/reducerFunc";
import { emptyState } from "./utils/StateAndAction";
import { WordList } from "./WordList";

function App(): JSX.Element {
  const [{ faveWordsData, isLoading, selectedWord }, dispatch] = useReducer(
    flashboardsReducer,
    emptyState
  );

  return (
    <>
      <Header />
      <WordList
        faveWordsData={faveWordsData}
        isLoading={isLoading}
        dispatch={dispatch}
        selectedWord={selectedWord}
      />
      <Footer />
    </>
  );
}

export default App;

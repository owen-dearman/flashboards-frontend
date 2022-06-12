import { Link } from "react-router-dom";

export function AppIndex(): JSX.Element {
  return (
    <>
      <h1>What's your favourite word? See what everyone else thinks!</h1>
      <Link to={"/words"}>
        <button>Wordboards</button>
      </Link>
      <h1>Need to do some revision? Use our flashcard tool!</h1>
      <Link to={"/flashcards"}>
        <button>Flashcards</button>
      </Link>
    </>
  );
}

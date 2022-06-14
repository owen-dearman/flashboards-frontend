import { Link } from "react-router-dom";

export function AppIndex(): JSX.Element {
  return (
    <section className="homepage">
      <h1>Welcome to Flashboards!</h1>
      <h1>See a collection of cool and interesting words on the Wordboard</h1>
      <Link to={"/words"}>
        <button className="submitButton">Wordboard</button>
      </Link>
      <h1>Use our flashcard revision tool</h1>
      <Link to={"/flashcards"}>
        <button className="submitButton">Flashcards</button>
      </Link>
    </section>
  );
}

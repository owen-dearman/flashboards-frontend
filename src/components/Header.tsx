import { Link } from "react-router-dom";

export function Header(): JSX.Element {
  return (
    <>
      <Link to={"/"}>
        <button>🏠</button>
      </Link>
      <header>
        <img
          src="flashboards-logo.png"
          alt="Flashboards Logo. Yellow cursive writing"
        />
      </header>
    </>
  );
}

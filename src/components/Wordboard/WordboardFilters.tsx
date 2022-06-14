export function WordboardFilters(): JSX.Element {
  return (
    <section className="filtersBar">
      <p>Alphabetical</p>
      <button className="sortButton">⬆️</button>
      <button className="sortButton">⬇️</button>
      <p>Frequency</p>
      <button className="sortButton">⬆️</button>
      <button className="sortButton">⬇️</button>
    </section>
  );
}

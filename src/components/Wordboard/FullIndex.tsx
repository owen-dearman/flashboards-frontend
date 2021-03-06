import { useState } from "react";
import { SingleWordComponent } from "./SingleWordComponent";
import { filterSearchTerm } from "../../utils/filterSearchTerm";
import { fullwordData } from "../../utils/interfaces";

interface FullIndexProps {
  faveWordsData: fullwordData[];
}

export function FullIndex({ faveWordsData }: FullIndexProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fullIndex = faveWordsData
    .sort((a, b) => a.word.localeCompare(b.word))
    .filter((word) => filterSearchTerm(word, searchTerm))
    .map((word) => <SingleWordComponent key={word.id} data={word} />);

  return (
    <>
      <input
        placeholder="Search Words..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button className="submitButton" onClick={() => setSearchTerm("")}>
        Clear Search
      </button>
      <p>
        Showing {fullIndex.length} of {faveWordsData.length} :{" "}
      </p>
      <div className="singleWordFullCardContainer">{fullIndex}</div>
    </>
  );
}

import { fullwordData } from "./interfaces";

export type SortTypes = "alphaDesc" | "alphaAsc" | "freqDesc" | "freqAsc";

export type State = {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  selectedWord: fullwordData | null;
  activeSort: SortTypes;
};

export type Action =
  | { type: "request" }
  | {
      type: "fetchWords";
      wordData: fullwordData[];
    }
  | { type: "selectedWord"; selectedWord: fullwordData | null }
  | { type: "sort"; activeSort: SortTypes };

export const emptyState: State = {
  faveWordsData: [],
  isLoading: false,
  selectedWord: null,
  activeSort: "alphaAsc",
};

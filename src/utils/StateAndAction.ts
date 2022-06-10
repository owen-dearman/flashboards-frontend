import { fullwordData, userOb } from "./interfaces";

export type State = {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  userList: userOb[];
  selectedWord: fullwordData | null;
};

export type Action =
  | { type: "request" }
  | {
      type: "fetchWord&UserData";
      wordData: fullwordData[];
      userData: userOb[];
    }
  | { type: "selectedWord"; selectedWord: fullwordData | null };

export const emptyState: State = {
  faveWordsData: [],
  isLoading: false,
  userList: [],
  selectedWord: null,
};

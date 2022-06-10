import { fullwordData, userOb } from "./interfaces";

export type State = {
  faveWordsData: fullwordData[];
  isLoading: boolean;
  userList: userOb[];
};

export type Action =
  | { type: "request" }
  | {
      type: "fetchWord&UserData";
      wordData: fullwordData[];
      userData: userOb[];
    };

export const emptyState: State = {
  faveWordsData: [],
  isLoading: false,
  userList: [],
};

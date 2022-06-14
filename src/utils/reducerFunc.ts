import { State, Action } from "./StateAndAction";

export const flashboardsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "request":
      return {
        ...state,
        isLoading: true,
      };
    case "fetchWords":
      return {
        ...state,
        isLoading: false,
        faveWordsData: action.wordData,
      };
    case "selectedWord":
      return {
        ...state,
        selectedWord: action.selectedWord,
      };
    case "sort":
      return {
        ...state,
        activeSort: action.activeSort,
      };
  }
};

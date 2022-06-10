import { State, Action } from "./StateAndAction";

export const flashboardsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "request":
      return {
        ...state,
        isLoading: true,
      };
    case "fetchWord&UserData":
      return {
        ...state,
        isLoading: false,
        faveWordsData: action.wordData,
        userList: action.userData,
      };
    case "selectedWord":
      return {
        ...state,
        selectedWord: action.selectedWord,
      };
  }
};

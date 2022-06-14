import axios from "axios";
import { Dispatch } from "react";
import { fullwordData } from "./interfaces";
import { Action } from "./StateAndAction";
import { baseURL } from "./url";

export async function fetchWords(dispatch: Dispatch<Action>) {
  dispatch({ type: "request" });
  const wordResponse = await axios.get(baseURL + "/words");
  dispatch({
    type: "fetchWords",
    wordData: wordResponse.data.sort((a: fullwordData, b: fullwordData) =>
      a.word.localeCompare(b.word)
    ),
  });
}

import axios from "axios";
import { Dispatch, useState } from "react";
import { fetchWords } from "../../utils/fetchWords";
import {
  findAudio,
  findPhonetics,
  formatFrequency,
  formatMeaningData,
  formatSynonymData,
} from "../../utils/formatData";
import { Action } from "../../utils/StateAndAction";
import { baseURL } from "../../utils/url";

type FormType = { username: string; word: string };

interface AddFaveWordProps {
  dispatch: Dispatch<Action>;
}

export function AddFaveWord({ dispatch }: AddFaveWordProps): JSX.Element {
  const [formInputs, setFormInputs] = useState<FormType>({
    username: "",
    word: "",
  });

  function handleChange(name: string, value: string) {
    setFormInputs((values) => {
      return { ...values, [name]: value };
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const word = formInputs.word.toLowerCase();
    console.log("submit");
    console.log(formInputs.username);
    if (formInputs.username === "") {
      window.alert("We need a username!");
    } else {
      try {
        const api1Res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const api2Res = await axios.get(
          `https://api.datamuse.com/words?sp=${word}&md=sf&max=1`
        );
        const api3Res = await axios.get(
          `https://api.datamuse.com/words?ml=${word}&max=5`
        );
        const postReq = {
          username: formInputs.username,
          word: word,
          phonetics: findPhonetics(api1Res),
          freq: formatFrequency(api2Res.data[0].tags[0]),
          syllables: api2Res.data[0].numSyllables,
          audio: findAudio(api1Res),
          url: api1Res.data[0].sourceUrls[0],
          synonyms: formatSynonymData(api3Res.data),
          meanings: formatMeaningData(api1Res.data[0].meanings),
        };
        await axios.post(baseURL + "/words", postReq);
        setFormInputs({ username: "", word: "" });
        await fetchWords(dispatch);
      } catch (error) {
        window.alert(
          "That's either not an English word, or it's already been picked!"
        );
      }
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="username"
          placeholder="Username"
          value={formInputs.username}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <input
          name="word"
          placeholder="Add your favourite word..."
          value={formInputs.word}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

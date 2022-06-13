import { AxiosResponse } from "axios";

type SynonymType = { score: number; tags: string[]; word: string };
type MeaningType = {
  antonyms: string[];
  partOfSpeech: string;
  synonyms: string[];
  definitions: {
    antonyms: string[];
    definition: string;
    synonyms: string[];
  }[];
};

export function formatSynonymData(data: SynonymType[]): string[] {
  const synonymArr = [];
  for (const syn of data) {
    synonymArr.push(syn.word);
  }
  return synonymArr;
}

export function formatMeaningData(
  data: MeaningType[]
): { pos: string; meaning: string }[] {
  const meaningsArr = [];
  for (const word of data) {
    const pos = word.partOfSpeech;
    for (let i = 0; i < 3; i++) {
      if (i >= word.definitions.length) {
        return meaningsArr;
      }
      const def = word.definitions[i];
      meaningsArr.push({ pos: pos, meaning: def.definition });
    }
  }
  return meaningsArr;
}

export function findPhonetics(res: AxiosResponse) {
  let guess = res.data[0].phonetic;
  if (guess === undefined) {
    return res.data[0].phonetics.length > 0
      ? (guess = res.data[0].phonetics[1].text)
      : null;
  }
  return guess;
}

export const formatFrequency = (f: string) => parseFloat(f.substring(2));

export function findAudio(res: AxiosResponse): string | null {
  const isAudio = res.data[0].phonetics.length > 0;
  if (isAudio) {
    return res.data[0].phonetics[0].audio;
  }
  return null;
}

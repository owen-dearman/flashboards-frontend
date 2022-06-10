import { fullwordData } from "./interfaces";

export function filterSearchTerm(word: fullwordData, searchTerm: string) {
  const wordBool = word.word.toUpperCase().includes(searchTerm.toUpperCase());
  const usernameBool = word.username
    .toUpperCase()
    .includes(searchTerm.toUpperCase());
  for (const meanings of word.meanings) {
    const meaningBool = meanings.meaning
      .toUpperCase()
      .includes(searchTerm.toUpperCase());
    const posBool = meanings.pos
      .toUpperCase()
      .includes(searchTerm.toUpperCase());
    if (meaningBool || posBool) {
      return true;
    }
  }
  return wordBool || usernameBool;
}

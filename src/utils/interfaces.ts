export interface fullwordData {
  id: number;
  user_id: number;
  username: string;
  date_added: string;
  word: string;
  phonetics?: string;
  freq?: number;
  syllables?: number;
  audio: string;
  url?: string;
  synonyms?: synOb[];
  meanings: meaningOb[];
}

type synOb = { id: number; word: string };
type meaningOb = { id: number; pos: string; meaning: string };
export type userOb = { id: number; username: string };

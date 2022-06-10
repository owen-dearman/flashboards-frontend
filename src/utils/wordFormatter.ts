export function wordFormatter(word: string) {
  const arr = word.split("");
  return arr[0].toUpperCase() + arr.join("").slice(1);
}

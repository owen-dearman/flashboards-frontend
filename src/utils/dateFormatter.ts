export function dateFormatter(fullDate: string): string {
  let date = "no date";
  let time = "no time";
  if (/\d\d\d\d-\d\d-\d\d/.test(fullDate)) {
    date = fullDate.slice(0, 10);
  }
  if (/\d\d:\d\d/.test(fullDate)) {
    time = fullDate.slice(11, 16);
  }
  return `${date} ( ${time} )`;
}

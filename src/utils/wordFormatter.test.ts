import { wordFormatter } from "./wordFormatter";

test("capital letter on first letter of word", () => {
  expect(wordFormatter("banana")).toStrictEqual("Banana");
  expect(wordFormatter("defenestration")).toStrictEqual("Defenestration");
});

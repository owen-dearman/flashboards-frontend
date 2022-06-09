import { returnOne } from "./test";

test("returns 1", () => {
  expect(returnOne()).toStrictEqual(1);
});

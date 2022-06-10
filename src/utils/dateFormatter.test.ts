import { dateFormatter } from "./dateFormatter";

describe("Suite of tests concerning the formatter of SQL date object into readable string", () => {
  test("The date should containg year/month/day and the time should contain hh:mm separated by hyphen", () => {
    expect(dateFormatter("2022-05-11T11:44:39.247Z")).toStrictEqual(
      "2022-05-11 ( 11:44 )"
    );
    expect(dateFormatter("1998-22-11T09:30:22.222Z")).toStrictEqual(
      "1998-22-11 ( 09:30 )"
    );
  });
  test("Where the input is not valid date/time, the return is defaulted", () => {
    expect(dateFormatter("")).toStrictEqual("no date ( no time )");
    expect(dateFormatter("dwqjkJKHLjks")).toStrictEqual("no date ( no time )");
    expect(dateFormatter("1998-5-4T12.23")).toStrictEqual(
      "no date ( no time )"
    );
  });
});

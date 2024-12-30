import { add } from "../src/index";

test("should return 0 when given an empty string", () => {
  expect(add("")).toBe(0);
});

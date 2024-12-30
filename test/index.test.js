import { add } from "../src/index";

test("should return 0 when given an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return 1 when given '1'", () => {
  expect(add("1")).toBe(1);
});

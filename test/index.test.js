import { add } from "../src/index";

test("should return 0 when given an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return 1 when given '1'", () => {
  expect(add("1")).toBe(1);
});

test("should return sum of two numbers when given two numbers", () => {
  expect(add("1,2")).toBe(3);
  expect(add("1,3")).toBe(4);
});

test("should return sum of multiple numbers when given multiple numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
  expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
});

test("should return sum of two numbers when given two numbers separated by new line", () => {
  expect(add("1\n2")).toBe(3);
  expect(add("1\n3")).toBe(4);
});

test("should return sum of multiple numbers having both comma and newline delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
  expect(add("1\n3,4,5")).toBe(13);
});

test("should return sum of multiple numbers having custom delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//#\n1#3#4")).toBe(8);
  expect(add("//|\n1|3|5")).toBe(9);
});

test("should throw an error when given negative numbers", () => {
  expect(() => add("-1")).toThrow("negatives numbers not allowed -1");
  expect(() => add("-1,2,-3")).toThrow("negatives numbers not allowed -1, -3");
});

test("should throw an error when given negative numbers if delimiter is also - symbol", () => {
  expect(() => add("-1")).toThrow("negatives numbers not allowed -1");
  expect(() => add("//-\n1,--2,-3")).toThrow(
    "negatives numbers not allowed -2"
  );
});

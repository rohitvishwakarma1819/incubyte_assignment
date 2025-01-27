/**
 * Adds a list of numbers provided as a string.
 *
 * This function supports custom delimiters, specified at the beginning of the string in the format:
 * `//<delimiter>\n<numbers>`.
 *
 * - Default delimiters are `,` and `\n`.
 * - Custom delimiters can be any single character.
 * - If the custom delimiter is `-`, the function processes it uniquely to avoid conflicts with negative numbers.
 *
 * @param {string} numbers - A string of numbers separated by delimiters.
 *   Example: "1,2,3" or "//;\n1;2;3".
 *
 * @throws {Error} If the string contains negative numbers, an error is thrown listing the negatives.
 *
 * @returns {number} The sum of the numbers in the string. Returns 0 if the input string is empty.
 *
 * @example
 * add("1,2,3"); // Returns 6
 * add("//;\n1;2;3"); // Returns 6
 * add(""); // Returns 0
 * add("//-\n1-2-3"); // Returns 6
 * add("1,-2,3"); // Throws Error: negatives numbers not allowed -2
 */
export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/; // default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2);
    numbers = parts[1];

    // If the delimiter is `-`, replace all occurrences of `--` with `-`
    if (delimiter === "-") {
      numbers = numbers.replace(/--/g, "#");
      numbers = numbers.replace(/-/g, "|");
      numbers = numbers.replace(/#/g, "|-");
      delimiter = /\|/;
    }
  }
  const nums = numbers.split(delimiter).map((num) => parseInt(num, 10));
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`negatives numbers not allowed ${negatives.join(", ")}`);
  }
  const result = nums.reduce((prev, curr) => {
    return solve(prev, curr, delimiter);
  }, getDefaultValue(delimiter));

  return result;
}

function solve(prev, curr, delimiter) {
  if (delimiter === '*') {
    return prev * curr;
  }

  return prev + curr;
}

function getDefaultValue(delimiter) {
  return delimiter === '*' ? 1 : 0;
}

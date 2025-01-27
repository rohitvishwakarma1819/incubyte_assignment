/**
 * calculate a list of numbers provided as a string.
 *
 * This function supports custom delimiters, specified at the beginning of the string in the format:
 * `//<delimiter>\n<numbers>`.
 *
 * - Default delimiters are `,` and `\n`.
 * - Custom delimiters can be any single character.
 * - If the custom delimiter is `-`, the function processes it uniquely to avoid conflicts with negative numbers.
 * - If the custom delmiter is `*`, the function returns product of all the numbers
 *
 * @param {string} numbers - A string of numbers separated by delimiters.
 *   Example: "1,2,3" or "//;\n1;2;3".
 *
 * @throws {Error} If the string contains negative numbers, an error is thrown listing the negatives.
 *
 * @returns {number} The sum or product of the numbers in the string. Returns 0 if the input string is empty.
 *
 * @example
 * stringCalculation("1,2,3"); // Returns 6
 * stringCalculation("//;\n1;2;3"); // Returns 6
 * stringCalculation(""); // Returns 0
 * stringCalculation("//-\n1-2-3"); // Returns 6
 * stringCalculation("1,-2,3"); // Throws Error: negatives numbers not allowed -2
 */
export function stringCalculation(numbers) {
  if (numbers === "") {
    return 0;
  }

  const { delimiter, processedNumbers } = extractDelimiter(numbers);
  const nums = processedNumbers.split(delimiter).map((num) => parseInt(num, 10));
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`negatives numbers not allowed ${negatives.join(", ")}`);
  }
  const result = nums.reduce((prev, curr) => {
    return calculateResult(prev, curr, delimiter);
  });

  return result;
}

/**
 * Extracts the delimiter and processes the numbers string.
 *
 * The function supports custom delimiters specified at the beginning of the string
 * in the format: `//<delimiter>\n<numbers>`.
 *
 * - Default delimiters are `,` and `\n`.
 * - Custom delimiters can be any single character.
 * - If the custom delimiter is `-`, the function processes it uniquely to avoid conflicts with negative numbers.
 *
 * @param {string} numbers - A string of numbers separated by delimiters.
 * @returns {Object} An object containing the delimiter and the processed numbers string.
 * @property {string|RegExp} delimiter - The delimiter used to separate the numbers.
 * @property {string} processedNumbers - The processed numbers string.
 */
function extractDelimiter(numbers) {
  let delimiter = /[\n,]/; // default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2);
    numbers = parts[1];

    if (delimiter === "-") {
      numbers = numbers.replace(/--/g, "#");
      numbers = numbers.replace(/-/g, "|");
      numbers = numbers.replace(/#/g, "|-");
      delimiter = /\|/;
    }
  }
  return { delimiter, processedNumbers: numbers };
}

/**
 * Calculates the result of two numbers based on the delimiter.
 *
 * If the delimiter is '*', it returns the product of the two numbers.
 * Otherwise, it returns the sum of the two numbers.
 *
 * @param {number} prev - The previous number in the calculation.
 * @param {number} curr - The current number in the calculation.
 * @param {string|RegExp} delimiter - The delimiter used to separate the numbers.
 * @returns {number} The result of the calculation.
 */
function calculateResult(prev, curr, delimiter) {
  if (delimiter === '*') {
    return prev * curr;
  }

  return prev + curr;
}


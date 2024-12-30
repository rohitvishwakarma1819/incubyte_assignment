export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/; // default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2);
    numbers = parts[1];
  }
  const nums = numbers.split(delimiter).map((num) => parseInt(num, 10));
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`negatives numbers not allowed ${negatives.join(", ")}`);
  }
  const result = nums.reduce((prev, curr) => prev + curr, 0);
  return result;
}

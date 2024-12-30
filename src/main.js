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
  const nums = numbers.split(delimiter);
  const result = nums.reduce((prev, curr) => prev + parseInt(curr, 10), 0);
  return result;
}

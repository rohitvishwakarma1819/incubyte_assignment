export function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const nums = numbers.split(/[\n,]/);
  const result = nums.reduce((prev, curr) => prev + parseInt(curr, 10), 0);
  return result;
}

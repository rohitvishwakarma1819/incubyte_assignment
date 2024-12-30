# Incubyte Assignment

## String Calculator TDD Kata

This repository contains a simple implementation of the **String Calculator** using **Test-Driven Development (TDD)** principles. The project adheres to the requirements outlined in the kata and supports a variety of functionalities for parsing and summing numbers from a string.

---

## Features

- **Empty String**: Returns `0` for an empty input string.
- **Single Number**: Returns the number itself.
- **Multiple Numbers**: Sums numbers separated by commas.
- **Newline Delimiters**: Handles newlines (`\n`) between numbers.
- **Custom Delimiters**: Allows custom single-character delimiters specified in the format `//[delimiter]\n[numbers...]`.
- **Negative Numbers**: Throws an exception with all negative numbers listed in the message.
- **Unlimited Numbers**: Handles any number of inputs.

---

## Examples

### Basic Usage

| Input          | Output |
| -------------- | ------ |
| `""`           | `0`    |
| `"1"`          | `1`    |
| `"1,5"`        | `6`    |
| `"1\n2,3"`     | `6`    |
| `"//;\n1;2;3"` | `6`    |

### Negative Numbers

Throws an exception for negative numbers:

- Input: `"1,-2,3,-4"`
- Exception: `negative numbers not allowed -2, -4`

---

### Pre-requesites

- You must have node installed in your system.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/rohitvishwakarma1819/incubyte_assignment

   cd incubyte_assignment
   ```
2. After cloning install packages using this command
   ```bash
   npm install
   ```
3. To run test
   ```bash
   npm test
   ```
4. To execute add function using custom input just call the function like
   ```bash
   add("1,2")
   ```

Thanks!

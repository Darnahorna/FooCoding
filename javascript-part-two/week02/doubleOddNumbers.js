function doubleOddNumbers(numbers) {
  return numbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 2);
}

module.exports = doubleOddNumbers;

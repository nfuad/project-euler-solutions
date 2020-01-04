// A permutation is an ordered arrangement of objects.
// For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
// If all of the permutations are listed numerically or alphabetically,
// we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210

// What is the millionth lexicographic permutation
// of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

const nthLexicographicPerm = (sortedAvailableDigits, n) => {
  const length = sortedAvailableDigits.length;
  if (length === 1) return n === 1 ? sortedAvailableDigits[0] : null;

  let combinationsWithoutFirstDigit = 1;
  for (let i = 2; i < length; i++) combinationsWithoutFirstDigit *= i;

  const firstDigitIndex = Math.floor((n - 1) / combinationsWithoutFirstDigit);
  if (firstDigitIndex >= length) return null;

  return (
    sortedAvailableDigits.splice(firstDigitIndex, 1) +
    nthLexicographicPerm(
      sortedAvailableDigits,
      n - firstDigitIndex * combinationsWithoutFirstDigit
    )
  );
};

const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(nthLexicographicPerm(arr, 1000000));

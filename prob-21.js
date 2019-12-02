// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which
// divide evenly into n). If d(a) = b and d(b) = a, where a ≠ b, then a and b are an
// amicable pair and each of a and b are called amicable numbers. For example, the
// proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore
// d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.

// get an array of all the proper divisors
const getProperFactors = n => {
  const divisors = [];
  const root = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= root; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (Math.pow(i, 2) !== n) divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b).filter(x => x !== n);
};

// let d(n) be defined as the sum of proper divisors of
// n (numbers less than n which divide evenly into n).
const d = n => getProperFactors(n).reduce((a, b) => a + b, 0);

// iterate over all numbers from 0 to 9999.
const result = Array.from({ length: 9999 })
  .map((_, n) => {
    const a = d(n);
    const b = d(a);
    // If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable
    // pair and each of a and b are called amicable numbers.
    return n !== a && n === b ? a : 0;
  })
  .reduce((a, b) => a + b);

console.log(result);

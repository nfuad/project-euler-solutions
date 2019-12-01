// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which 
// divide evenly into n). If d(a) = b and d(b) = a, where a ≠ b, then a and b are an 
// amicable pair and each of a and b are called amicable numbers. For example, the 
// proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore 
// d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.

let factorSum1 = 0
let factorSum2 = 0
let output = 0

for (let i = 1; i <= 10000; i++) {
    for (let j = 1; j < i; j++) {
        // add to the sum of factors if proper divisor
        if (i % j === 0) factorSum1 += j
    }

    for (let k = 1; k < factorSum1; k++) {
        // add to the sum of proper divisors
        if (factorSum1 % k === 0) factorSum2 += k
    }

    // make sure numbers are unique
    (factorSum2 === i && factorSum2 != factorSum1) ? output += (factorSum2 + i) : null

    // reset values to 0
    factorSum1 = 0;
    factorSum2 = 0;
}

//Divide by 2 so that each pair of amicable numbers only counted once.
output = output / 2;

console.log(output)



// ALTERNATIVE METHOD THAT MIGHT WORK
// https://en.wikipedia.org/wiki/Amicable_numbers
// Euler's rule is a generalization of the Thâbit ibn Qurra theorem. It states that if
// p = (2^(n − m) + 1)×2^m − 1,
// q = (2^(n − m) + 1)×2^n − 1,
// r = (2^(n − m) + 1)2×2^(m + n) − 1,
// where n > m > 0 are integers and p, q, and r are prime numbers, then 2^n×p×q and 2^n×r are a pair of amicable numbers.

// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!

let n = 100, result = BigInt(1), sum = 0

// Find the factorial
while (n != 0) {
    result *= BigInt(n)
    n -= 1
}

// Find the sum of the digits of the factorial
result.toString().split('').forEach(n => sum += parseInt(n))

console.log(sum)
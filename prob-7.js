// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

let primes = [];
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

let i = 0;
do {
    isPrime(i) ? primes.push(i) : null;
    ++i;
}
while (primes.length !== 10001);

console.log(Math.max(...primes))
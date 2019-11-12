// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//integer is the value for which we are finding prime factors
let integer = 600851475143,
    primeArray = [],
    isPrime;

//find divisors starting with 2
for (let i = 2; i <= integer; i++) {
    if (integer % i === 0) {
        //check if divisor is prime
        for (let j = 2; j <= i / 2; j++) {
            i % j === 0 ? isPrime = false : isPrime = true
        }
        //if the divisor is prime
        if (isPrime == true) {
            //divide integer by prime factor & factor store in array primeArray
            integer /= i
            primeArray.push(i);
        }
    }
}

largest = primeArray.sort((a, b) => a - b).reverse()[0];
console.log(largest)
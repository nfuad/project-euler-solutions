// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

let a, b, c

for (b = 1; b < 1000; b++) {
    // algebraic manipulation
    a = (500000 - 1000 * b) / (1000 - b);
    if (Math.floor(a) === a) {
        c = 1000 - a - b;
        break;
    }
}

console.log(a * b * c);
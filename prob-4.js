// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let palindromeArr = [];
let numArr = [];

let palindromeChecker = (num) => {
    let string = num.toString().split('')
    let reversed = num.toString().split('').reverse();
    return string.join('') === reversed.join('');
}

for (let i = 111; i <= 999; i++) {
    numArr.push(i)
    numArr.forEach(num => {
        if (palindromeChecker(num * i)) {
            palindromeArr.push(num * i)
        }
    })
}

console.log(Math.max(...palindromeArr));

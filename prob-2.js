// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let arr = [1, 2];
let i = 2;
while (arr[arr.length - 1] < 4000000) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
}
let sum = 0;
arr.forEach(item => item % 2 === 0 ? sum += item : null);
console.log(sum)

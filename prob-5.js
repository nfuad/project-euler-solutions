// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let num = 1;
const isValid = num => {
    const divBy = (dig) => {
        return num % dig === 0
    }
    return divBy(2) && divBy(3) && divBy(4) && divBy(5) && divBy(6) && divBy(7) && divBy(8) && divBy(9) && divBy(10) && divBy(11) && divBy(12) && divBy(13) && divBy(14) && divBy(15) && divBy(16) && divBy(17) && divBy(18) && divBy(19) && divBy(20)
}
while (!isValid(num)) {
    ++num
}
console.log(num)
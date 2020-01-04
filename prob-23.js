const abundants = [];
const isSumOfTwoAbundants = new Array(28123 + 1);
let sum = 0;

const isAbundant = num => {
  let sum = 0;
  for (let index = 1; index < num; index++) {
    num % index === 0 ? (sum += index) : null;
  }
  return sum > num;
};

for (let i = 1; i <= 28123; i++) {
  if (isAbundant(i)) abundants.push(i);
}

for (let i = 0; i < abundants.length; i++) {
  for (let j = i; j < abundants.length; j++) {
    if (abundants[i] + abundants[j] <= 28123) {
      isSumOfTwoAbundants[abundants[i] + abundants[j]] = true;
    } else {
      break;
    }
  }
}

for (let i = 1; i <= 28123; i++) {
  if (!isSumOfTwoAbundants[i]) sum += i;
}

console.log(sum);

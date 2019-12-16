// Using names.txt (right click and 'Save Link/Target As...'),
// a 46K text file containing over five-thousand first names,
// begin by sorting it into alphabetical order. Then working out
// the alphabetical value for each name, multiply this value by its
// alphabetical position in the list to obtain a name score.
// For example, when the list is sorted into alphabetical order,
// COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
// So, COLIN would obtain a score of 938 × 53 = 49714.
// What is the total of all the name scores in the file?

const fs = require("fs");

// Read the textfile into a string.
const names = fs
  .readFileSync("./names.txt", "utf8")
  // Split the string on every comma and remove the quotes
  .split(",")
  .map(name => name.replace(/"/g, ""))
  // Sort the names.
  .sort();

// Get the alphabetical value by adding the chars position in
// the alphabet. A = Char Code 65 = Alphabet Position 1.
const getAlphabeticalValue = name =>
  name.split("").reduce((memo, item) => memo + item.charCodeAt(0) - 64, 0);

const result = names.reduce(
  (memo, item, index) => memo + getAlphabeticalValue(item) * (index + 1),
  0
);

console.log(result);

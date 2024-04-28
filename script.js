// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("jagdish kumar singh"));

// function MyNameIsReverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(MyNameIsReverse("Jabir"));

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(
//   findLongestWord("The quick brownBread fox jumps over the lazy dog")
// ); // Output: "quick"

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(10)); // Output: true
console.log(isPrime(12)); // Output: false

function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i < (word.length / 2); i++) {
    if (word[i] === word[word.length - i - 1]) {
      return true
    } else {
      return false
    }
  }

}

/* 
  Add your pseudocode here
  create a function called isPalindrom that takes in a word as an argument
    if word reads the same forward as it does back 
      return true
    else
      return false

*/

/*
  Add written explanation of your solution here
  i is the counter and is set to 0
  while i is less than length of word / 2 i++

  if word at index i === word.length - i - 1

  return true

  this matches the first letter of word and the last letter of word gradually moving toward the center to check if this is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

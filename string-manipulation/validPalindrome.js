#!/usr/bin/env node
// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it reads
// the same forward and backward. Alphanumeric characters include letters and numbers.
// Given the string s, return true if it is a palindrome, or false otherwise.

// Approach:
// 1. Convert the string into all lowercase letters.
// 2. Trim any whitespace or alpha numeric characters.
// 3. Compare the resulting string by splitting on whitespace
// reversing the array and joining it back to a string. If the 
// two values are the same then we have a palindrome.

// This approach will requiring using regexes.
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  if (s.length == 0) {
    return true;
  }
  let stripped_lower = s.toLowerCase().replace(/[^0-9a-z]/g, '');
  stripped_lower = (stripped_lower == stripped_lower.split('').reverse().join(''));
  return stripped_lower;
};

// Approach 2:
// We can use a left and right pointer and compare each
// letter in the string. Let's try to do this.

// Approach 3:
// Loop through the stripped string.
// Concatenate each character to a new string.
// Compare the new string to the stripped string.
// If they are not the same set our flag to false... Return the flag.
const isPalindrome3 = (s) => {
  let same = true;
  const stripped = s.toLowerCase().replace(/[^0-9a-z]/g, '');
  let new_string = '';
  for (let i = stripped.length - 1; i >= 0; i--) {
    new_string += stripped[i];
  }
  if (new_string !== stripped) {
    same = false;
  }
  return same;
}

console.log(isPalindrome('lol a lol'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));

console.log(isPalindrome3('lol a lol'));
console.log(isPalindrome3('A man, a plan, a canal: Panama'));
console.log(isPalindrome3('race a car'));
console.log(isPalindrome3(' '));

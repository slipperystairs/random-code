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
};

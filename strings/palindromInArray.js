#!/usr/bin/env node
// Given an array of strings "words", return the first palindromic
// string in the array. If there is no such string, return an empty string.
// A string is palindromic if it reads the same forward and backwards.

/**
 * @param {string[]} words
 * @return {string}
*/
// Solution 1.
const firstPalindrome = (words) => {
  for (const word of words) {
    if (word === word.split('').reverse().join('')) {
      return word;
    }
  }
  return '';
};

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']));
console.log(firstPalindrome(['notapalindrome', 'racecar']));
console.log(firstPalindrome(['def', 'ghi']));

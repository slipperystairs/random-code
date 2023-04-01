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

// Solution 2: Using a left and right pointer.
const firstPalindrome2 = (words) => {
  for (let i = 0; i < words.length; i++) {
    if (isValid(words[i])) {
      return words[i]
    }
  }
  return '';
};

const isValid = (word) => {
  let right = word.length - 1;
  let left = 0;
  let flag = true;
  while (left <= word.length) {
    if (word[left] !== word[right]) {
      flag = false;
    }
    left++;
    right--;
  }
  return flag;
};

console.log(firstPalindrome2(['abc', 'aba']))

// console.log(firstPalindrome2(['abc', 'car', 'ada', 'racecar', 'cool']));
// console.log(firstPalindrome2(['notapalindrome', 'racecar']));
// console.log(firstPalindrome2(['def', 'ghi']));

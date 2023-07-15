#!/usr/bin/env node
// Given two string s and t, return true if t is an 
// anagram of s, and false otherwise. 
//
// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically
// using all the original letters exactly once.
//
// Example 1:
// Input: s = 'anagram', t = 'nagagram'
// Output: true
//
// Example 2: s = 'rat', t = 'car'
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1: Check if each character of both strings are the same
// - Split on each character of both strings
// - Sort each new array
// - Join each character of the array.
const isAnagram = (s, t) => {
  return s.split('').sort().join('') == t.split('').sort().join('') ? true : false;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 2: Using a hash map to keep track of the characters in our string
// - Create a hash map for each char the s string, use it as a legend.
// - Keep track of the occurrence for each character of the string.
// - Compare string t to the Hash Map and subtract the count each time we see the letter
// - If the count is 0 then we have an anagram.
const isAnagram2 = (s, t) => {
  const map = new Map();
  const len = s.length == t.length;
  if (!len) {
    return false;
  }
  addCharToMap(s, map);
  removeCharCount(t, map);
};

const main = () => {
  console.log(isAnagram('anagram', 'nagaram'));
  console.log(isAnagram('rat', 'car'));
};

main();

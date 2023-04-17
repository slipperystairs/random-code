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
const isAnagram = (s, t) => {
  return s.split('').sort().join('') == t.split('').sort().join('') ? true : false;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

#!/usr/bin/env node
// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

// Example 1:
// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
// Example 2:
// Input: words = ["leetcode","win","loops","success"], pref = "code"
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.

/** SOLUTION 1
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, pref.length) == pref) {
      count++;
    }
  }
  return count;
};

/** SOLUTION 2
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, pref.length);
  }
  for (const word of words) {
    if (word == pref) {
      count++;
    }
  }
  return count;
};


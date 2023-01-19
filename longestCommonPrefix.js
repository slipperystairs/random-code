#!/usr/bin/env node
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Test 1: 
// Input: strs = ['flower', 'flow', 'flight']
// Output: "fl"

// Algorithm
// 1. Sort the array of strings in alphabetical order.
// 2. Compare the characters in the first and last strings in the array.
// 3. If they are the same, then push them onto the result array.
// 4. Else, stop the comparison - result contains the longest common prefix
//    among the strings in the array.

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  for (let i = 0; i <= strs.length; i++) {
    for (let j = 1; j <= strs.length; j++) {
      if (strs[i] == strs[j]) {
        console.log('I think we found something');
        console.log('strs[i]: ', strs[i], ' strs[j]: ', strs[j]);
      }
    }
  }
};

longestCommonPrefix(['flower', 'flow', 'flight']);
longestCommonPrefix(['dog', 'racecar', 'car']);

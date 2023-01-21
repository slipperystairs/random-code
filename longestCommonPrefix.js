#!/usr/bin/env node
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Test 1: 
// Input: strs = ['flower', 'flow', 'flight']
// Output: "fl"

// Algorithm approach: Horizontal scanning
// To employ this idea, the algorithm iterates through the strings [S1…Sn][S_1 \ldots S_n][S1​…Sn​],
// finding at each iteration i the longest common prefix of strings LCP(S_1...S_n) When LCP(S_1...S_n)
// is an empty string, the algorithm ends. Otherwise after n iterations, the algorithm returns LCP(S_1...S_n)
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
};

// Algorithm
// 1. First we will find the shortest string and its length. [x]
// 2. Secondly, we will take the first string and match its each character one by one with all the other strings.
// 3. As soon as we encounter a character which does not match, we will break out of the loop.
// This approach does not handle when an array with and empty string is passed to our function. Or when there is 
// only one element in the array that is a single letter.
/* const longestCommonPrefix = (strs) => {
  let longest_common_prefix = '';
  if (strs == null || strs.length == 0) {
    return longest_common_prefix;
  }
  let shortest_string = strs[0].length;
  for (const s of strs) {
    shortest_string = Math.min(shortest_string, s.length);
  }
  for (let i = 0; i < shortest_string; i++) {
    let current = strs[0].charAt(i);
    // Check if the character is found in all other strings or not.
    for (const s of strs) {
      if (s.charAt(i) !== current) {
        return longest_common_prefix;
      } 
    }
    longest_common_prefix += current;
  }
  return longest_common_prefix;
}; */

console.log('first call: ', longestCommonPrefix(['flower', 'flow', 'flight']));
console.log('second call: ', longestCommonPrefix(['dog', 'racecar', 'car']));
console.log('third call: ', longestCommonPrefix(['']));

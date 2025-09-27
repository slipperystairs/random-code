#!/usr/bin/env node
/*
* Given a string s consisting of words and spaces, return the length fo the last word in the string.
* A word is a maximal substring consisting of non-space characters only.
*
* Example: s = 'Hello World' Output: 5
* Explanation: The last word is "World" with length of 5.
*/

/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLastWord = function(s) {
  let arry = s.trim().split(' ');
  let new_string = arry.at(-1);
  return new_string.length;
};

// The following code would also be a solution.
// var lengthOfLastWord = function(s) {
//   let len = 0;
//   for (let i = s.length - 1; i > -1; i--) {
//     if (s[i] != ' ') {
//       len++;
//     } else if (len > 0) {
//       return len;
//     }
//   }
//   return len;
// };

console.log(lengthOfLastWord('Hello World'));

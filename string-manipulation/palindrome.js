// Given an integer x, return true if x is a palindrome integer.
// An integer is a palindrome when it read the same backwards as forward.
// For example, 121 is a palindrome when it reads the same backwards as forward.
// Example 1:
// Input: 1
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
/**
 * @param {number} x
 * @return {boolean}
 *
 */
 var isPalindrome = function(x) {
  let str = x.toString();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start++) != str.charAt(end--)) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(2202));
console.log(isPalindrome(11));
console.log(isPalindrome(391023));

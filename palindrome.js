var isPalindrome = function(x) {
  let str = x.toString();
  let start = 0;
  let end = str.length - 1;
  console.log('end: ', end);
  while (start < end) {
    if (str.charAt(start++) != str.charAt(end--)) {
      return false;
    }
  }
  return true;
};

console.log('palindrome: ', isPalindrome(121));
console.log('palindrome: ', isPalindrome(1221));
console.log('palindrome: ', isPalindrome(11));
console.log('palindrome: ', isPalindrome(32323));

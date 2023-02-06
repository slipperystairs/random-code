#!/usr/bin/env node

/*
* Reverse bits of a given 32 bits unsigned integer.
* * Note that in some languages, such as Java, there is no unsigned integer type. In this case,
*   both input and output will be given as a signed integer type. They should not affect your implementation,
*   as the integer's internal binary representation is the same, whether it is signed or unsigned.
* * In Java, the compiler represents the signed integers using 2's compliment notation. Therefore, in example 2,
*   the input represents the signed integer -3 and the output represents the signed integer -107341825
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
  const string = n.toString(2);
  const arry_string = string.split('');
  const length = arry_string.length;
  for (let i = 0; i < (32 - length); i++) {
      arry_string.unshift('0');
  }
  return parseInt(arry_string.reverse().join('').toString(2), 2);
};

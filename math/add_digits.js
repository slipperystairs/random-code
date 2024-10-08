#! /usr/bin/env node

// Given an integer num, repreadtly add all its digits
// until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Example 2:

// Input: num = 0
// Output: 0

// The dumbest solutions. This shit is dumb and slow as fuck.
// const addDigits = (num) => {
//   let n = num.toString();

//   while (n.length !== 1) {
//     const array = n.split('');
//     n = 0;

//     array.forEach((a) => {
//       n = n + parseInt(a);
//     });

//     n = n.toString();
//   }

//   return parseInt(n);
// };

const addDigits2 = (num) => {
  const n = num.toString();
  let sum = 0;

  if (n.length == 1) {
    return num;
  }

  for (let i = 0; i < n.length; i++) {
    sum = sum + parseInt(n[i]);
  }
  return addDigits2(sum);
};

console.log(addDigits2(38));

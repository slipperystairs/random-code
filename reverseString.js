#!/usr/bin/env node
/* 
  Write a function that reverses a string. The string input is given
  as an array of characters. You must do this by modifying the input
  array in-place with O(1) extra memory.
/**
* @param {character[]} s
* @return {void} Do not return anything, modify s in-place instead.
*/
var reverseString = function(s) {
  // Declare a left and right pointer.
  // Swap the value of each pointer until you reach the middle.
  // You will need a temp variable to swap the two. Including the ++ and --
  let left = 0;
  let right = s.length - 1;
  let temp;
  while (left < right) {
    temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
  }
  return s;
  /*
  The below code will give me an reversed array on my local machine...
  but does not look reversed according to the LeetCode output...Why?
  let temp = [];
  for (let i = s.length - 1; i >= 0; i--) {
    temp.push(s[i]);
  }
  return temp;*/ 
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

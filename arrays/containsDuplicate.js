#!/usr/bin/env node
// Given an integer array nums, return true if any
// value appears at least twice in the array, and
// return false if every element is distinct.
//
// Example 1:
// Input: nums = [1, 2, 3 ,1]
// Output: true
//
// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false
//
// Example 3:
// Input: nums = [1, 1, 1, 1, 3, 3, 3, 4, 2, 4, 2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 * Brute Force - Linear Search Solution
 * O(N^2) | Space O(1)
 */
const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      return true;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Hash Set - Early Bail Out Solution
 * O(N) | Space O(1)
 */
const containsDuplicate2 = (nums) => {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));

console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3, 4]));

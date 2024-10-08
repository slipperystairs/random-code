#! /usr/bin/env node

// Given an integer array nums and an integer k, return true if there are two distinct indicies i and j
// in the array such taht nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

const containsNearbyDuplicate = (nums, k) => {
  const hash_map = {};
  let flag = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash_map && Math.abs(i - hash_map[nums[i]]) <= k) {
      flag = true;
    }
    // Update the index of the current element
    hash_map[nums[i]] = i;
  }

  return flag;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

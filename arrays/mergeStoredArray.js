#!/usr/bin/env node
/* #88 Merge sorted array
*  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
*  and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
* 
*  Merge nums1, and nums2 into a single array sorted in non-decreasing order.
* 
*  The final sorted array should not be returned by the function, but instead be
*  stored inside the array nums1. To accommodate this, nums1 has the length of m + n,
*  where the first m elements denote the elements that should be merged, and the last
*  n  elements should be ignored. num2 has the length of m.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  // Get the last index of nums1;
  let last = m + n - 1;
  // Merge them in reverse order
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m--;
    } else {
      nums1[last] = nums2[n - 1];
      n--;
    }
    last--;
  }
  // fill nums 1 with left over elements in nums 2;
  while (n > 0) {
    nums[last] = nums2[n - 1];
    n--;
    last--;
  }
  console.log(nums1);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

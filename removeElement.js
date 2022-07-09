#!/usr/bin/env node
/*
* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
* The relative order of the elements may be changed.
*
* Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
* More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
* It does not matter what you leave beyond the first k elements.
* 
* Return k after placing the final result in the first k slots of nums.

* Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = (nums, val) => {
  /* This loop is not a solution..
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(val)) {
      console.log('nums[i]: ', nums[i]);
      nums.splice(nums.indexOf(val), 1);
    }
  }*/
  // This is a solution
  /*while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }*/
  // We can use two pointers i and j.
  // As long as nums[j] != val, we copy nums[j] into nums[i] and increment both indexes at the same time.
  // Repeat until j reaches the end of the array and the new length is i.
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums [i] = nums[j];
      i++;
    }
  }
  return i;
};

let main = () => {
  const result = removeElement([0,1,2,2,3,0,4,2], 2);
  console.log('result: ', result);
}

main();

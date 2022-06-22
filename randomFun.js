#!/usr/bin/env node
const findLargest = (arry) => {
  let temp;
  for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
      if (arry[i] > arry[j]) {
        temp = arry[i];
      }
    }
  }
  return temp;
}
console.log('Largest number is: ', findLargest([-5,-2, -6, 0, -1]));

const checkOddOrEven = () => {
  for (let i = 0; i < 15; i++) {
    if (i === 0) {
      console.log(i + ' is even');
    } else if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }
}
console.log(checkOddOrEven());
// This comment is for testing something

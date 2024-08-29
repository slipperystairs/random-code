#! /usr/bin/env node

const main = (arry) => {
  for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length - 1 - i; j++) {
      if (arry[j] > arry[j + 1]) {
        const tmp = arry[j];
        arry[j] = arry[j + 1];
        arry[j + 1] = tmp;
      }
    }
  }

  return arry;
};

console.log(main([1, 3, 7, 4, 2]));

function sortNumbers(arry) {
  let temp;
  for (let i = 0; i < arry.length; i++) {
    console.log('i: ', i, arry[i]);
    for (let j = i + 1; j < arry.length; j++) {
      if (arry[i] < arry[j]) {
        temp = arry[i];
        arry[i] = arry[j];
        arry[j] = temp;
      }
    }
  }
  return arry;
}
sortNumbers([0, -1, 4]);

// This algorithm is used in the assumption that our array is sorted.
const binarySearch = (haystack, needle) => {
  let lo = 0;
  let hi = haystack.length;
  do {
    const midpoint = Math.floor(lo + (hi - lo) / 2);
    console.log('midpoint: ', midpoint);
    const value = haystack[midpoint];
    console.log('value: ', value);

    if (value === needle) {
      return midpoint;
    } else if (value > needle) {
      // We need to search on the lower side.
      hi = midpoint;
    } else {
      // Meaning the we have to search on the higher side.
      lo = midpoint + 1;
    }
  } while (lo < hi);
};

console.log(binarySearch([-1,0,3,5,9,12], 9));

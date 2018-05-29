/*
Given an array of numbers.
Find the maximum and minimum
elements in array. Calculate their
difference and check is there such
an element in the array or not.
*/

const checker = (arr) => {
  const max = Math.max.apply(null, arr);
  const min = Math.min.apply(null, arr);

  return arr.indexOf(max - min) !== -1;
};

console.log(checker([1, 10, 2, 9, 2, 3, 9, 4]));
console.log(checker([1, 4, -43, 12]));


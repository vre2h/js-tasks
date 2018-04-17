/*
Given an array of numbers. Create an
array containing only unique elements.
*/

const unique = (array) => {
  const newArr = array.filter((elem, index) => array.indexOf(elem) === index);

  return newArr;
};

console.log(unique([1, 2, 3, 3, 2, 5]));
console.log(unique([4, 4]));

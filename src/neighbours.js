/*
Given an array. Create the array which
elements are products between two neighbours.
*/

const neighbours = (array) => {
  const newArr = [];

  for (let index = 0; index < array.length - 1; index += 1) {
    const element = array[index];
    const next = array[index + 1];

    newArr.push(element * next);
  }

  return newArr;
};

console.log(neighbours([3, 7, 12, 5, 20, 0]));
console.log(neighbours([1, 1, 4, 32, 6]));

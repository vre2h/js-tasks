/*
Given an array of numbers. Print frequency
of each unique number. (Frequency is the
count of particular element divided by the
count of all elements)
*/
const frequency = (arr) => {
  const obj = {};

  arr.forEach((elem) => {
    if (Object.prototype.hasOwnProperty.call(obj, elem)) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });

  Object.keys(obj).forEach((elem) => {
    obj[elem] /= arr.length;
  });

  return obj;
};

console.log(frequency([1, 1, 1, 2, 2, 3]));
console.log(frequency([4, 4]));
console.log(frequency([1, 2, 3, 4]));

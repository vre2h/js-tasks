function filterReplacer(arr, func) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i], i, arr) === true) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

// tests
const array = [-1, -2, 3, -5, 6, 3];

const positiveArr = filterReplacer(array, item => item > 0);

console.log(positiveArr);

function reduceReplacer(arr, func, initial) {
  let i = 0;

  if (initial === undefined) {
    initial = arr[0];
    i = 1;
  }

  while (i < arr.length) {
    initial = func(initial, arr[i], i += 1, arr);
  }

  return initial;
}

const array = [1, 2, 3, 4, 5];

const result = reduceReplacer(array, (sum, current) => sum + current);

console.log(result);

function getSums(arr) {
  const newArr = [];

  const last = reduceReplacer(arr, (sum, item) => {
    newArr.push(sum);
    return sum + item;
  });

  newArr.push(last);

  return newArr;
}

console.log(getSums(array));
console.log(getSums([-2, -1, 0, 1]));

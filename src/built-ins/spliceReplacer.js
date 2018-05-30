const exArr = [1, 2, 3, 4, 6];

const spliceReplacer = function spliceReplacer(arr, begin, count) {
  const before = arr.slice(0, begin);
  const after = arr.slice(begin);

  if (begin > arr.length) {
    begin = arr.length;
  } else if (begin < 0) {
    begin = arr.length - 1;
  }

  if (count > arr.length - begin) {
    const newArr = arr.slice(0, begin);
    return newArr;
  } else if (count === 0 && arguments[3] !== undefined) {
    for (let i = 0, acc = 3; i < arguments.length - 3; i += 1, acc += 1, begin += 1) {
      before[begin] = arguments[acc];
    }

    const all = before.concatReplacer(after);
    return all;
  }

  for (let j = 0; j < count; j += 1) {
    after.shift();
  }

  const newArray = before.concatReplacer(after);

  return newArray;
};

const concatReplacer = function concatReplacer(arr, newArr) {
  const array = [];

  for (let i = 0; i < arr.length; i += 1) {
    array[i] = arr[i];
  }

  for (let j = arr.length, k = 0; k < newArr.length; j += 1, k += 1) {
    array[j] = newArr[k];
  }

  return array;
};

concatReplacer([1, 3], [2, 3]);
console.log(spliceReplacer(exArr, 2, 10));

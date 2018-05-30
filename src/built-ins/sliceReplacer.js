const arr = [1, 2, 3, 4, 5];

const sliceReplacer = function sliceReplacer(array, begin, end) {
  const newArray = [];
  if (begin < 0) {
    begin = 0;
  }

  if (end > array.length) {
    end = array.length;
  }

  for (let i = begin, j = 0; i < end; i += 1, j += 1) {
    newArray[j] = array[i];
  }

  return newArray;
};

sliceReplacer(arr, 0, 3);

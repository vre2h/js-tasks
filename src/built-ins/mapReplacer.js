function mapReplacer(arr, func) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArray[i] = func(arr[i], i, arr);
  }

  return newArray;
}

const array = [1, 3, 4, 5, 6];
const negArr = mapReplacer(array, (item) => {
  const newItem = -item;
  return newItem;
});

console.log(negArr);

const arr = [1, 2, 3, 4, 6];

function makeList(array) {
  if (array === false) {
    return null;
  }
  return {
    value: array.shift(),
    next: makeList(array),
  };
}

console.log(makeList(arr));

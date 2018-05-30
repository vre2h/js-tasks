function everyReplacer(arr, func) {
  let bool;
  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i], i, arr) === false) {
      bool = true;
      break;
    }
    bool = false;
  }
  if (bool) {
    return false;
  }

  return true;
}

function someReplacer(arr, func) {
  let bool;

  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i], i, arr) === true) {
      bool = true;
      break;
    }
    bool = false;
  }

  if (bool) {
    return true;
  }

  return false;
}

const arr = [1, 1, -2, 2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(everyReplacer(arr, isPositive));
console.log(someReplacer(arr, isPositive));

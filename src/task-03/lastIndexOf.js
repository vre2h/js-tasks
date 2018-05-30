const lastIndexOf = (arr, item) => {
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];

    if (element === item) return index;
  }
  
  return -1;
};

exports.lasIndexOf = lastIndexOf;
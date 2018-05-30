const indexOf = (arr, item) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element === item) return index;
  }
  
  return -1;
};

exports.indexOf = indexOf;
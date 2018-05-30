const findOdd = (arr) => {
  const objOfNums = arr.reduce((acc, elem) => {
    acc[elem] ? acc[elem] += 1 : acc[elem] = 1;
    return acc;
  }, {});

  for (const item in objOfNums) {
    if (objOfNums[item] % 2 !== 0) {
      return +item;
    }
  }
};

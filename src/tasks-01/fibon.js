const recFibon = (n) => {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }

  return n * recFibon(n - 1);
};

const loopFibon = (n) => {
  let res = 1;

  if (n === 0) {
    return res;
  }

  if (n === 1) {
    return res;
  }

  for (let index = 2; index <= n; index += 1) {
    res *= index;
  }
  return res;
};

console.log(recFibon(0), loopFibon(0));
console.log(recFibon(6), loopFibon(6));

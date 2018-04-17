/*
Write a program, to calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ..... + ( − 1 ^ k ) * 1/n .
*/

const sequence = (n) => {
  let res = 0;

  for (let index = 1, k = 0; index <= n; index += 2, k += 1) {
    if (k % 2 === 0) {
      res += 1 / index;
    } else {
      res -= 1 / index;
    }
  }

  return res;
};

console.log(sequence(3));
// console.log(sequence(7));

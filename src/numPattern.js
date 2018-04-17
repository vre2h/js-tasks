/*
Print the following number pattern:
1
12
123
1234
12345
1234
123
12
1
*/
const numPattern = (num) => {
  let res = '';

  for (let index = 1; index < num + 1; index += 1) {
    res += index;
    console.log(res);
  }
  for (let index = num - 1; index > 0; index -= 1) {
    res = res.substr(0, index);
    console.log(res);
  }
};

console.log(numPattern(5));

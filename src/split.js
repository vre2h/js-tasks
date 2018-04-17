/*
Given a string. Split it into words
around the spaces and print them in
an array. Word can be anything which
is string. If there is a sequence of
spaces, the result will be empty strings.
*/

const split = (str) => {
  const arr = [];
  let res = '';

  str += ' ';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ' && str[i] !== undefined) {
      res += str[i];
    } else {
      arr.push(res);
      res = '';
    }
  }

  return arr;
};

console.log(split('Somewhere over the rainbow'));
console.log(split('javascript'));
console.log(split('   '));
console.log(split('46778 + !'));

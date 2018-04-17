/*
Insert a number. Remove all zeros from the number,
except the last one and print the
number. If there are at most one zero,
print “Nothing to remove”.
*/

const noZero = (num) => {
  const strNum = num.toString();
  const firstIndex = strNum.indexOf(0);
  const lastIndex = strNum.lastIndexOf(0);
  let res = '';

  if (firstIndex === lastIndex) {
    return 'Nothing to remove.';
  }

  for (let index = 0; index < strNum.length; index += 1) {
    if (strNum.charAt(index) !== '0' || index === lastIndex) {
      res += strNum.charAt(index);
    }
  }

  return +res;
};

console.log(noZero(40501206));
console.log(noZero(7845012));
console.log(noZero(0));

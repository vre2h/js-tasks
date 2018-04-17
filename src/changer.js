const changer = (str, sym1, sym2) => {
  let newStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (str.charAt(index) === sym1) {
      newStr += sym2;
    } else {
      newStr += str.charAt(index);
    }
  }

  return newStr;
};

console.log(changer('The results are not recorded yet', 't', 'w'));
console.log(changer('does the following code', 'o', '0'));

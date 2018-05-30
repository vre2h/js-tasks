const mirror = (str) => {
  let res = '';

  if (str.length % 2 === 0) {
    res = str.substr(str.length / 2, str.length) + str.substr(0, str.length / 2);
  } else {
    res = str.substr((str.length / 2) + 1, str.length) +
          str.charAt(str.length / 2) +
          str.substr(0, str.length / 2);
  }
  return res;
};

console.log(mirror('stranger'));
console.log(mirror('rotator'));

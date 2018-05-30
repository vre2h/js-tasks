// import { EROFS } from "constants";

const createEnum = (arr) => {
  let res = {};

  for (let index = 0; index < arr.length; index++) {
    const elem = arr[index];
    const prev = arr[index - 1];

    if (typeof elem === 'string' && typeof prev === 'object') {
      res[elem] = prev.value += 1; 
    } else if (typeof elem === 'string') {
      res[elem] = 0;
    }

    if (typeof elem === 'object') {
      res[elem.name] = elem.value;
    }
  }
  
  return res;
};

console.log(createEnum(['hello', {name: 'world', value: 1}, 'urish']));
console.log(createEnum(['hello', 'urish']));

exports.createEnum = createEnum;
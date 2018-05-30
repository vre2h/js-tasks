/*
Реализуйте функцию, которая принимает на вход список параметров
и возвращает сформированный query string из этих параметров:

import bqs from '../buildQueryString';

bqs({ per: 10, page: 1 });
// page=1&per=10
*/

const bqs = (obj) => {
  const sortedNames = Object.keys(obj).sort();

  return sortedNames.reduce((acc, elem, index) => {
    if (sortedNames.length === 1 || index === 0) {
      return `${elem}=${obj[elem]}`;
    } else if (index === sortedNames.length - 1) {
      return `${acc}&${elem}=${obj[elem]}`;
    }

    return `${acc}&${elem}=${obj[elem]}`;
  }, '');
};

/*
Реализуйте и экспортируйте функцию по умолчанию, которая
принимает на вход массив и элементы, которые должны
отсутствовать в возвращаемом массиве.
*/

const without = (arr, ...rest) => {
  const newArr = new Set(rest);

  return arr.filter(elem => !newArr.has(elem));
}

/*
Реализуйте и экспортируйте функцию по умолчанию, которая
принимает на вход массив и число, которое задает размер
чанка (куска). Функция должна вернуть массив, состоящий
из чанков указанной размерности.

chunk(['a', 'b', 'c', 'd'], 2);
// → [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]
*/

const chunk = (arr, length) => {
  const iter = (arr, length, acc) => {
    if (arr.length === 0) {
      return acc;
    }

    acc.push(arr.slice(0, length))

    return iter(arr.slice(length), length, acc);
  };

  return iter(arr, length, []);
}

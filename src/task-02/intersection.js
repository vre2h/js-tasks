/*
Реализуйте и экспортируйте функцию по умолчанию,
которая находит пересечение двух массивов. Пересечение
двух массивов A и B — это массив только с теми
элементами A и B, которые одновременно принадлежат
обоим массивам, без дублей.
*/

const intersection = (arr1, arr2) => {
  const set = new Set(arr2);

  const uniq = new Set(arr1.filter(elem => set.has(elem)));

  return Array.from(uniq);
}

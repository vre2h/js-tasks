/*
Реализуйте функцию enlargeArrayImage, которая принимает
изображение в виде двумерного массива и увеличивает его в два раза.
*/

const enlargeArrayImage = (arr) => {
  const doubledArr = arr.reduce((acc, elem) => [...acc, elem, elem], []);

  return doubledArr.map(elem => elem.reduce((acc, item) => [...acc, item, item], []));
};

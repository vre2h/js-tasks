const { getRandomInt } = require('./getRandomInt');

const getRandomMatrix = (n, m) => {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < m; j++) {
      matrix[i].push(getRandomInt(100));
    }
  }
  
  return matrix;
};

console.log(getRandomMatrix(3, 5));

exports.getRandomMatrix = getRandomMatrix;
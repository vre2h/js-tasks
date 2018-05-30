const { lastIndexOf } = require('./lastIndexOf');

const matrixLastIndexOf = (matrix, item) => {
  for (let index = matrix.length - 1; index >= 0; index++) {
    const res = lastIndexOf(matrix[index], item);

    if (res !== -1) return [index + 1, res + 1]; 
  }

  return null;
};

exports.matrixLastIndexOf = matrixLastIndexOf;
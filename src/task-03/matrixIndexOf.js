const { indexOf } = require('./indexOf');

const matrixIndexOf = (matrix, item) => {
  for (let index = 0; index < matrix.length; index++) {
    const res = indexOf(matrix[index], item);

    if (res !== -1) return [index + 1, res + 1]; 
  }

  return null;
};

exports.matrixIndexOf = matrixIndexOf;
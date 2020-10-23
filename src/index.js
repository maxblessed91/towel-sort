
// You should implement your task here.

module.exports = towelSort = (matrix) => {

  if (!Array.isArray(matrix) || (matrix.length == 0))

  return ([]); // empty array

  let sortMatrix = []; // iteration = 1;

    matrix.forEach((subMatrix, index) => {
      if (index % 2 !== 0) {

        sortMatrix = sortMatrix.concat(subMatrix.reverse());

      } else {sortMatrix = sortMatrix.concat(subMatrix);

      } // iteration += 1;

    });

  return sortMatrix;
}

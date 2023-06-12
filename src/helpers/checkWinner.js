
const checkWinner = (boardState, subTabuleiroRow, subTabuleiroCelula) => {
  const lines = [
    // Horizontal lines
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Vertical lines
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Diagonal lines
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    const [rowA, colA] = a;
    const [rowB, colB] = b;
    const [rowC, colC] = c;

    if (
      boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA] !== '' &&
      boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA] ===
        boardState[subTabuleiroRow * 3 + rowB][subTabuleiroCelula * 3 + colB] &&
      boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA] ===
        boardState[subTabuleiroRow * 3 + rowC][subTabuleiroCelula * 3 + colC]
    ) {
      setWinner(boardState[subTabuleiroRow * 3 + rowA][subTabuleiroCelula * 3 + colA]);
      return;
    }
  }
};


export default checkWinner;
/*const checkWinner = (boardState, subBoardRow, subBoardCell) => {
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
        boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA] !== '' &&
        boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA] ===
          boardState[subBoardRow * 3 + rowB][subBoardCell * 3 + colB] &&
        boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA] ===
          boardState[subBoardRow * 3 + rowC][subBoardCell * 3 + colC]
      ) {
        return Winner(boardState[subBoardRow * 3 + rowA][subBoardCell * 3 + colA]);
        return;
      }
    }
  };

*/
//export default checkWinner;



    
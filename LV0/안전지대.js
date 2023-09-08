function solution(board) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const isSafe = (x, y) => {
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < board.length &&
        ny < board[0].length &&
        board[nx][ny] === 1
      ) {
        return false;
      }
    }
    return true;
  };

  let safeCount = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0 && isSafe(i, j)) {
        safeCount++;
      }
    }
  }

  return safeCount;
}

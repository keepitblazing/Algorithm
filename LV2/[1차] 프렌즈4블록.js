function solution(m, n, board) {
  board = board.map((row) => row.split(""));

  function canBeRemoved(x, y) {
    const targetBlock = board[x][y];
    return (
      targetBlock !== 0 &&
      targetBlock === board[x + 1][y] &&
      targetBlock === board[x][y + 1] &&
      targetBlock === board[x + 1][y + 1]
    );
  }

  let hasChanged = true;
  let removedCount = 0;

  while (hasChanged) {
    hasChanged = false;
    let blocksToRemove = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (canBeRemoved(i, j)) {
          blocksToRemove.push([i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]);
        }
      }
    }

    blocksToRemove.forEach((position) => {
      const [x, y] = position;
      if (board[x][y] !== 0) {
        removedCount++;
        board[x][y] = 0;
      }
    });

    if (blocksToRemove.length) {
      hasChanged = true;
      for (let j = 0; j < n; j++) {
        let emptyRow = m - 1;
        for (let i = m - 1; i >= 0; i--) {
          if (board[i][j] !== 0) {
            [board[emptyRow][j], board[i][j]] = [
              board[i][j],
              board[emptyRow][j],
            ];
            emptyRow--;
          }
        }
      }
    }
  }

  return removedCount;
}

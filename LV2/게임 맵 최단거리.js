function solution(maps) {
  const numRows = maps.length; // 행의 개수
  const numCols = maps[0].length; // 열의 개수
  const directions = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [0, 1], // 오른쪽
  ]; // 상하좌우 방향 이동을 위한 배열

  // 너비 우선 탐색(BFS)을 위한 함수
  function bfs() {
    const queue = [[0, 0, 1]]; // 초기 위치와 시작 거리
    maps[0][0] = 0; // 시작점 방문 처리

    while (queue.length > 0) {
      const [row, col, distance] = queue.shift();

      // 도착 지점에 도달했을 경우 거리 반환
      if (row === numRows - 1 && col === numCols - 1) {
        return distance;
      }

      // 모든 방향으로의 이동 시도
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // 맵 범위 내에 있고, 방문하지 않은 길인 경우
        if (
          newRow >= 0 &&
          newRow < numRows &&
          newCol >= 0 &&
          newCol < numCols &&
          maps[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol, distance + 1]);
          maps[newRow][newCol] = 0; // 해당 위치 방문 처리
        }
      }
    }

    // 모든 가능한 경로를 탐색했음에도 도착점에 도달하지 못한 경우
    return -1;
  }

  return bfs();
}

function solution(grid) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const n = grid.length;
  const m = grid[0].length;

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array(4).fill(false))
  );
  const cycles = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let d = 0; d < 4; d++) {
        if (visited[i][j][d]) continue;

        let x = i,
          y = j,
          dir = d;
        let length = 0;

        while (!visited[x][y][dir]) {
          visited[x][y][dir] = true;
          length++;

          let nx = x + dx[dir];
          let ny = y + dy[dir];

          if (nx < 0) nx = n - 1;
          if (nx >= n) nx = 0;
          if (ny < 0) ny = m - 1;
          if (ny >= m) ny = 0;

          if (grid[nx][ny] === "L") dir = (dir + 3) % 4;
          else if (grid[nx][ny] === "R") dir = (dir + 1) % 4;

          x = nx;
          y = ny;
        }

        cycles.push(length);
      }
    }
  }

  cycles.sort((a, b) => a - b);
  return cycles;
}

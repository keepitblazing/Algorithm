function solution(wallpaper) {
  let answer = [Infinity, Infinity, 0, 0];
  wallpaper = wallpaper.map((item) => item.split(""));

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        answer[0] = Math.min(answer[0], i);
        answer[1] = Math.min(answer[1], j);
        answer[2] = Math.max(answer[2], i + 1);
        answer[3] = Math.max(answer[3], j + 1);
      }
    }
  }
  return answer;
}

function solution(wallpaper) {
  const X = [];
  const Y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        Y.push(i);
        X.push(j);
      }
    }
  }

  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}

function solution(m, n, startX, startY, balls) {
  const startPox = [startX, startY];
  return balls.map((ball) =>
    Math.min(
      up(startPox, ball, n),
      down(startPox, ball),
      left(startPox, ball),
      right(startPox, ball, m)
    )
  );
}

function calculateDistance(x1, y1, x2, y2) {
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}

function up([x1, y1], [x2, y2], n) {
  if (x1 === x2 && y1 <= y2) return Infinity;
  return calculateDistance(x1, y1, x2, 2 * n - y2);
}

function down([x1, y1], [x2, y2]) {
  if (x1 === x2 && y1 >= y2) return Infinity;
  return calculateDistance(x1, y1, x2, -y2);
}

function left([x1, y1], [x2, y2]) {
  if (y1 === y2 && x1 >= x2) return Infinity;
  return calculateDistance(x1, y1, -x2, y2);
}

function right([x1, y1], [x2, y2], m) {
  if (y1 === y2 && x1 <= x2) return Infinity;
  return calculateDistance(x1, y1, 2 * m - x2, y2);
}

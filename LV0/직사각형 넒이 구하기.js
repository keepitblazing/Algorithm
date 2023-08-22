function solution(dots) {
  let x = dots.map((v) => v[0]);
  let y = dots.map((v) => v[1]);

  let width = Math.max(...x) - Math.min(...x);
  let height = Math.max(...y) - Math.min(...y);

  return width * height;
}

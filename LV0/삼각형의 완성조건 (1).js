function solution(sides) {
  let side = sides.sort((a, b) => b - a);
  return side[1] + side[2] > side[0] ? 1 : 2;
}

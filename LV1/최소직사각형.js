function solution(sizes) {
  let b = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][1] > sizes[i][0]) {
      b.push(sizes[i].reverse());
    } else {
      b.push(sizes[i]);
    }
  }
  let w = b.map((el) => el[0]);
  let h = b.map((el) => el[1]);

  let max = Math.max(...w);
  let max2 = Math.max(...h);

  return max * max2;
}

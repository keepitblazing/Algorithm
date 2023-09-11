function solution(dots) {
  function slope(dot1, dot2) {
    return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
  }

  const combinations = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];

  for (let comb of combinations) {
    const slope1 = slope(dots[comb[0]], dots[comb[1]]);
    const slope2 = slope(dots[comb[2]], dots[comb[3]]);

    if (slope1 === slope2) {
      return 1;
    }
  }

  return 0;
}

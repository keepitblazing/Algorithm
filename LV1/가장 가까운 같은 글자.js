function solution(s) {
  const check = {};

  return [...s].map((value, index) => {
    if (check[value] !== undefined) {
      const distance = index - check[value];
      check[value] = index;
      return distance;
    } else {
      check[value] = index;
      return -1;
    }
  });
}

function solution(ingredient) {
  const stk = [];
  let cnt = 0;

  ingredient.forEach((ing) => {
    stk.push(ing);

    if (
      stk.length >= 4 &&
      stk[stk.length - 4] === 1 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 1] === 1
    ) {
      stk.splice(stk.length - 4, 4);
      cnt++;
    }
  });

  return cnt;
}

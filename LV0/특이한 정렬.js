function solution(numlist, n) {
  numlist.sort((a, b) => {
    const newA = Math.abs(a - n);
    const newB = Math.abs(b - n);
    if (newA === newB) {
      return b - a;
    }
    return newA - newB;
  });
  return numlist;
}

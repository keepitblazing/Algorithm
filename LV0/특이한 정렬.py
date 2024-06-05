def solution(numlist, n) {
  numlist.sort((a, b) => {
    const newA = Math.abs(a - n);
    const newB = Math.abs(b - n);
    if (newA === newB) {
      return a - b;
    }
    return newA - newB;
  });
  return numlist;
}
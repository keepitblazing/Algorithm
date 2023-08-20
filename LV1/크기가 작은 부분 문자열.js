function solution(t, p) {
  let count = 0;
  let newP = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    let subStr = t.substring(i, i + p.length);
    let subVal = Number(subStr);
    if (subVal <= newP) {
      count++;
    }
  }
  return count;
}

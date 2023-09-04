function solution(k, m, score) {
  if (score.length < m) {
    return 0;
  }
  score.sort((a, b) => a - b);
  let totalPrice = 0;
  while (score.length >= m) {
    const box = score.splice(score.length - m, m);
    const price = m * Math.min(...box);
    totalPrice += price;
  }
  return totalPrice;
}

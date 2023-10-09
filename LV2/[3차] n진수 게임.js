function solution(n, t, m, p) {
  function convert(num, base) {
    const characters = "0123456789ABCDEF";
    let result = "";
    while (num > 0) {
      result = characters[num % base] + result;
      num = Math.floor(num / base);
    }
    return result ? result : "0";
  }

  let answer = "";
  let num = 0;
  while (answer.length < t * m) {
    answer += convert(num, n);
    num++;
  }

  let result = "";
  for (let i = 0; i < t; i++) {
    result += answer[p - 1 + i * m];
  }
  return result;
}

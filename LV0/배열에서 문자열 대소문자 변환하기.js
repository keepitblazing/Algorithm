function solution(strArr) {
  return strArr.map((v, i) =>
    i === 0 || i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}

function solution(strArr) {
  const length = strArr.reduce((acc, str) => {
    const len = str.length;
    acc[len] = (acc[len] || 0) + 1;
    return acc;
  }, {});

  return Math.max(...Object.values(length));
}

function solution(a, d, included) {
  let newArr = [];
  let arg = a;
  for (let i = 0; i < included.length; i++) {
    newArr.push(arg);
    arg += d;
  }
  return newArr.reduce((acc, v, i) => {
    if (included[i] && v) {
      return Number(acc) + Number(v);
    }
    return acc;
  }, 0);
}

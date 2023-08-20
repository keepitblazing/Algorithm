function solution(l, r) {
  let result = [];
  for (let num = l; num <= r; num++) {
    let strNum = String(num);
    if (strNum.split("").every((char) => char === "0" || char === "5")) {
      result.push(num);
    }
  }
  if (result.length === 0) {
    return [-1];
  }

  return result;
}

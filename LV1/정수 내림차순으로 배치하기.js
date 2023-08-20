function solution(n) {
  let num = (n + "").split("");
  let num2 = num.sort(function (a, b) {
    return b - a;
  });
  let num3 = num2.join("");
  let num4 = parseInt(num3);

  return num4;
}

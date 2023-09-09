function solution(n, k) {
  let translate = n.toString(k);
  let splitTranslate = translate.split("0").filter((x) => x !== "");
  let count = 0;
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let str of splitTranslate) {
    let num = parseInt(str, 10);
    if (isPrime(num)) count++;
  }

  return count;
}

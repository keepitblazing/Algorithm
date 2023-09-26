function solution(number, limit, power) {
  function a(num) {
    let count = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        count++;
        if (i !== num / i) {
          count++;
        }
      }
    }
    return count;
  }

  let answer = [];
  for (let i = 1; i <= number; i++) {
    answer.push(a(i));
  }

  return answer
    .map((v) => (v > limit ? power : v))
    .reduce((acc, cur) => acc + cur);
}

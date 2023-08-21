function solution(num, total) {
  let result = [];

  let average = Math.floor(total / num);

  let middle = Math.floor(num / 2);

  for (let i = average - middle; i <= average + middle; i++) {
    let sum = 0;
    for (let j = i; j < i + num; j++) {
      sum += j;
    }

    if (sum === total) {
      for (let k = i; k < i + num; k++) {
        result.push(k);
      }
      break;
    }
  }

  return result;
}

function solution(left, right) {
  let count = 0;
  let answer = 0;
  for (let i = left; i <= right; i++) {
    //right가 left보다 크다
    for (let j = 1; j <= i; j++) {
      //0으로 나오면 무한대라서 1부터
      if (i % j === 0) {
        //i를 j값으로 나누었을때 나머지가 0이면 약수
        count += 1;
      }
    }
    if (count % 2 === 0) {
      //홀짝 판별
      answer += i;
    } else {
      answer -= i;
    }
    count = 0;
  }
  return answer;
}

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      //i 와 j 가 같은값이 나오면 안되게
      let sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        //indexOf에선 찾는 값이 없으면 -1을 반환
        answer.push(sum);
        //없는값을 answer에 push
      }
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  //정렬
  return answer;
}

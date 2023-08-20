function solution(n, m) {
  let answer = [];
  let yak = [];
  let b = [];

  for (let i = 1; i <= n; i++) {
    n % i === 0 ? yak.push(i) : yak;
  }

  for (let i = 1; i <= m; i++) {
    m % i === 0 ? yak.push(i) : yak;
  }

  const findDuplicates = (yak) =>
    yak.filter((item, index) => yak.indexOf(item) !== index);
  const duplicates = findDuplicates(yak);

  let num = duplicates.pop();
  answer.push(num);

  let min = 1;

  while (true) {
    if (min % n == 0 && min % m == 0) {
      break;
    }
    min++;
  }
  answer.push(min);
  //두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수이다.
  //lcm을 1부터 시작하여 점차 lcm++하면서 각각의 두 수를 lcm으로 나누었을 때 나머지 값이 0인지를 비교한다.

  return answer;
}

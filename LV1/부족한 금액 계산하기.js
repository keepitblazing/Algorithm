function solution(price, money, count) {
  let answer = 0;
  let howmuch = 0;

  for (let i = 1; i <= count; i++) {
    howmuch += price * i;
  }
  howmuch - money < 0 ? (answer = 0) : (answer = howmuch - money);

  return answer;
}

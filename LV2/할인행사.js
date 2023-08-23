function solution(want, number, discount) {
  const wantedProducts = {};
  // 원하는 제품과 수량을 객체로 만들어준다.
  for (let i = 0; i < want.length; i++) {
    wantedProducts[want[i]] = number[i];
  }
  let count = 0;
  // 할인하는 제품의 길이에서 10을 뺀 만큼 반복한다. why? 10일 연속으로 할인하는 제품이 있어야 하기 때문이다.
  for (let i = 0; i <= discount.length - 10; i++) {
    let currentProducts = { ...wantedProducts };
    // 할인하는 제품의 길이만큼 반복한다.
    for (let j = i; j < i + 10; j++) {
      if (currentProducts[discount[j]]) {
        currentProducts[discount[j]]--;
        if (currentProducts[discount[j]] === 0) {
          delete currentProducts[discount[j]];
        }
      }
    }
    // currentProducts의 길이가 0이면 count를 1 증가시킨다.
    if (Object.keys(currentProducts).length === 0) {
      count++;
    }
  }

  return count;
}

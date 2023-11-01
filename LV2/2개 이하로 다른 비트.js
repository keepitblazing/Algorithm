function solution(numbers) {
  // findNext 함수는 주어진 숫자의 비트를 조작하여 조건에 맞는 다음 숫자를 찾기.
  const findNext = (num) => {
    // 만약 주어진 숫자가 짝수라면, 가장 낮은 비트를 1로 바꿔주기.
    // 예: 2(10) -> 3(11)
    if (num % 2 === 0) return num + 1;

    // 숫자가 홀수인 경우, 비트 조작
    // 비트 문자열로 변환하고, 앞에 '0'을 하나 추가
    const binary = "0" + num.toString(2);
    // 가장 낮은 자리의 '0'의 위치를 찾습니다.
    const zeroIndex = binary.lastIndexOf("0");
    // 해당 '0'을 '1'로 바꾸고, 바로 다음 비트를 '0'으로 바꿈.
    // 이렇게 함으로써 1~2개의 비트만 변경.
    // parseInt 함수를 사용하여 결과적인 이진 문자열을 다시 숫자로 변환.
    return parseInt(
      `${binary.substring(0, zeroIndex)}10${binary.substring(zeroIndex + 2)}`,
      2
    );
  };

  // 주어진 배열의 각 숫자에 대해 findNext 함수를 적용하고 결과를 배열로 반환합니다.
  return numbers.map(findNext);
}

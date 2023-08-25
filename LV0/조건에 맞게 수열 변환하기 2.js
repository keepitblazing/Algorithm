function solution(arr) {
  let x = 0;
  while (true) {
    const transformedArr = arr.map((num) =>
      num >= 50 && num % 2 === 0
        ? num / 2
        : num < 50 && num % 2 === 1
        ? num * 2 + 1
        : num
    );

    if (arr.every((v, i) => v === transformedArr[i])) {
      return x;
    }

    arr = transformedArr;
    x++;
  }
}

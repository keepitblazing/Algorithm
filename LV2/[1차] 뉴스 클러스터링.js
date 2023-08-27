function solution(str1, str2) {
  // 다중집합으로 변환
  const toMultiSet = (str) => {
    const multiSet = [];
    let newStr = str.toLowerCase();
    for (let i = 0; i < newStr.length - 1; i++) {
      const element = newStr[i] + newStr[i + 1];
      if (element.match(/[a-z]{2}/)) {
        multiSet.push(element);
      }
    }
    return multiSet;
  };

  const newStr1 = toMultiSet(str1);
  const newStr2 = toMultiSet(str2);
  // 합집합, 교집합 구하기
  const hap = newStr1.length + newStr2.length;
  let gyo = 0;
  // 교집합 구하기
  newStr1.forEach((element) => {
    const index = newStr2.indexOf(element);
    if (index !== -1) {
      gyo++;
      newStr2.splice(index, 1);
    }
  });

  if (hap === 0) {
    return 65536;
  }

  return Math.floor((gyo / (hap - gyo)) * 65536);
}

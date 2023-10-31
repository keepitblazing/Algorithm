function solution(numbers) {
  const findNext = (num) => {
    if (num % 2 === 0) return num + 1;

    const binary = "0" + num.toString(2);
    const zeroIndex = binary.lastIndexOf("0");

    return parseInt(
      `${binary.substring(0, zeroIndex)}10${binary.substring(zeroIndex + 2)}`,
      2
    );
  };

  return numbers.map(findNext);
}

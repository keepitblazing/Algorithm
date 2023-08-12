function solution(s) {
  let stack = s.split("").reduce((acc, char) => {
    if (acc.length && acc[acc.length - 1] === char) {
      acc.pop();
    } else {
      acc.push(char);
    }
    return acc;
  }, []);

  return stack.length === 0 ? 1 : 0;
}

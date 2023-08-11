function solution(priorities, location) {
  const a = priorities.map((target, index) => ({
    myPrint: index === location,
    value: target,
  }));

  let count = 0;

  while (true) {
    let current = a.shift();
    if (a.some((target) => target.value > current.value)) {
      a.push(current);
    } else {
      count++;
      if (current.myPrint) return count;
    }
  }
}

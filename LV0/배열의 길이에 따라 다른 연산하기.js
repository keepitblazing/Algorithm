const solution = (arr, n) =>
  arr.map((v, i) =>
    arr.length % 2 ? (i % 2 === 0 ? v + n : v) : i % 2 === 1 ? v + n : v
  );

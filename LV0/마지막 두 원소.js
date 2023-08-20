function solution(num_list) {
  const length = num_list.length;
  const last = num_list[length - 1];
  const beforeLast = num_list[length - 2];
  if (last > beforeLast) {
    num_list.push(last - beforeLast);
  } else {
    num_list.push(last * 2);
  }

  return num_list;
}

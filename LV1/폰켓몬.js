function solution(nums) {
  let answer = 0;
  let canSelect = nums.length / 2;
  const set = new Set(nums);
  const uniqueArr = [...set];
  let poketmon = uniqueArr.length;
  if (canSelect == poketmon) {
    answer = poketmon;
  } else if (canSelect > poketmon) {
    answer = poketmon;
  } else {
    answer = canSelect;
  }
  return answer;
}

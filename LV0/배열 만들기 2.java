class Solution {

  public int[] solution(int l, int r) {
    List<Integer> result = new ArrayList<>();
    for (int num = l; num <= r; num++) {
      String strNum = String.valueOf(num);
      if (strNum.chars().allMatch(c -> c == '0' || c == '5')) {
        result.add(num);
      }
    }
    if (result.size() == 0) {
      return new int[] { -1 };
    }

    return result.stream().mapToInt(i -> i).toArray();
  }
}

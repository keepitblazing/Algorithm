class Solution {

  public int[] solution(int[] num_list) {
    int length = num_list.length;
    int last = num_list[length - 1];
    int beforeLast = num_list[length - 2];
    if (last > beforeLast) {
      int[] result = new int[length + 1];
      for (int i = 0; i < length; i++) {
        result[i] = num_list[i];
      }
      result[length] = last - beforeLast;
      return result;
    } else {
      int[] result = new int[length + 1];
      for (int i = 0; i < length; i++) {
        result[i] = num_list[i];
      }
      result[length] = last * 2;
      return result;
    }
  }
}

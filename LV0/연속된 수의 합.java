class Solution {

  public int[] solution(int num, int total) {
    int[] result = new int[num];
    int average = total / num;
    int middle = num / 2;
    for (int i = average - middle; i <= average + middle; i++) {
      int sum = 0;
      for (int j = i; j < i + num; j++) {
        sum += j;
      }
      if (sum == total) {
        for (int k = i; k < i + num; k++) {
          result[k - i] = k;
        }
        break;
      }
    }
    return result;
  }
}

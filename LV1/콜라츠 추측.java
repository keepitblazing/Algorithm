class Solution {

  public int solution(int num) {
    for (int count = 0; count < 500; count++) {
      if (num == 1) {
        return count;
      }
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    }
    return -1;
  }
}

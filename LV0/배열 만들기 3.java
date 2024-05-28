class Solution {

  public int[] solution(int n, int k) {
    int[] answer = {};
    for (int i = 1; i <= n; i++) {
      if (i % k == 0) {
        answer[answer.length] = i;
      }
    }
    return answer;
  }




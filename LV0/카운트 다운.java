class Solution {

  public int[] solution(int start, int end) {
    int[] answer = new int[end - start];
    for (int i = 0; i < end - start; i++) {
      answer[i] = end - i - 1;
    }
    return answer;
  }
}

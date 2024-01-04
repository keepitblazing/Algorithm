class Solution {

  public int solution(int[] ingredient) {
    int[] stack = new int[ingredient.length];
    int cnt = 0;
    int answer = 0;
    for (int i : ingredient) {
      stack[cnt++] = i;
      if (
        cnt >= 4 &&
        stack[cnt - 1] == 1 &&
        stack[cnt - 2] == 3 &&
        stack[cnt - 3] == 2 &&
        stack[cnt - 4] == 1
      ) {
        cnt -= 4;
        answer++;
      }
    }
    return answer;
  }
}

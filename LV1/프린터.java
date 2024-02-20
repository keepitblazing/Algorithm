class Solution {

  public int solution(int[] priorities, int location) {
    int answer = 0;
    int[] count = new int[10];
    int max = 0;
    for (int i = 0; i < priorities.length; i++) {
      count[priorities[i]]++;
      max = Math.max(max, priorities[i]);
    }
    int index = 0;
    while (true) {
      if (priorities[index] == max) {
        count[max]--;
        answer++;
        if (index == location) {
          break;
        }
        if (count[max] == 0) {
          while (count[max] == 0) {
            max--;
          }
        }
      }
      index = (index + 1) % priorities.length;
    }
    return answer;
  }
}

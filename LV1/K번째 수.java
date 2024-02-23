class Solution {

  public int[] solution(int[] array, int[][] commands) {
    int[] answer = new int[commands.length];
    for (int i = 0; i < commands.length; i++) {
      int[] command = commands[i];
      int[] l = new int[command[1] - command[0] + 1];
      for (int j = 0; j < l.length; j++) {
        l[j] = array[command[0] + j - 1];
      }
      Arrays.sort(l);
      answer[i] = l[command[2] - 1];
    }
    return answer;
  }
}

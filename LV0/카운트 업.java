import java.util.ArrayList;

public class Solution {

  public static ArrayList<Integer> solution(int start, int end) {
    ArrayList<Integer> answer = new ArrayList<>();
    for (int i = start; i <= end; i++) {
      answer.add(i);
    }
    return answer;
  }
}

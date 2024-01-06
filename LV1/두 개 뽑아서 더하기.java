import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {

  public int[] solution(int[] numbers) {
    Set<Integer> newHashSet = new HashSet<Integer>();
    for (int i = 0; i < numbers.length - 1; i++) {
      for (int j = i + 1; j < numbers.length; j++) {
        newHashSet.add(numbers[i] + numbers[j]);
      }
    }

    return Arrays
      .stream(newHashSet.stream().mapToInt(Integer::intValue).toArray())
      .sorted()
      .toArray();
  }
}

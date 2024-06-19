class Solution {

  public int[] solution(int[] arr) {
    List<Integer> answer = new ArrayList<>();
    for (int i = 0; i < arr.length; i++) {
      if (answer.size() == 0) {
        answer.add(arr[i]);
      } else if (answer.get(answer.size() - 1) < arr[i]) {
        answer.add(arr[i]);
      } else {
        while (answer.size() > 0 && answer.get(answer.size() - 1) >= arr[i]) {
          answer.remove(answer.size() - 1);
        }
        answer.add(arr[i]);
      }
    }
    return answer.stream().mapToInt(i -> i).toArray();
  }
}

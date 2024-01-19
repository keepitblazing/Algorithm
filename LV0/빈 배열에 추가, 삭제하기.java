import java.util.*;

class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        List<Integer> tempList = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            int count = flag[i] ? arr[i] * 2 : -arr[i];
            for (int j = 0; j < Math.abs(count); j++) {
                if (count > 0) {
                    tempList.add(arr[i]);
                } else {
                    if (!tempList.isEmpty()) {
                        tempList.remove(tempList.size() - 1);
                    }
                }
            }
        }

        int[] answer = new int[tempList.size()];
        for (int i = 0; i < tempList.size(); i++) {
            answer[i] = tempList.get(i);
        }
        return answer;
    }
}

import java.util.Arrays;

class Solution {
    public double solution(int[] arr) {
        return Arrays.stream(arr).average().orElse(Double.NaN);
    }
}

// 이전 풀이
// class Solution {
//     public double solution(int[] arr) {
//         double answer = 0;
//         for (int i = 0 ; i < arr.length ; i++) {
//             answer += arr[i];
//         }
//         return answer / arr.length;
//     }
// }
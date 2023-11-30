class Solution {
    public int solution(int[] num_list) {
        String even = "";
        String odd = "";
        for (int num : num_list) {
            if (num % 2 != 0) {
                odd += num;
            } else {
                even += num;
            }
        }
        int oddNumber = Integer.parseInt(odd);
        int evenNumber = Integer.parseInt(even);
        return oddNumber + evenNumber;
    }
}

class Solution {
    public int solution(int[] numbers) {
        int maximum = 0;
        int secondMaximum = 0;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] > maximum) {
                secondMaximum = maximum;
                maximum = numbers[i];
            } else if (numbers[i] > secondMaximum) {
                secondMaximum = numbers[i];
            }
        }

        return maximum * secondMaximum;
    }
}

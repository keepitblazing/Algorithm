func solution(n int) int {
    answer := 0
    for i := 0; i <= n; i++ {
        if n % 2 != 0 {
            if i % 2 != 0 {
                answer += i
            }
        } else {
            if i % 2 == 0 {
                answer += i * i
            }
        }
    }
    return answer
}
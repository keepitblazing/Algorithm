func solution(n int) int {
    if n == 1 {
        return 4
    }
    for i := 1; i <= n; i++ {
        if i * i == n {
            return (i + 1) * (i + 1)
        }
    }
    return -1
}
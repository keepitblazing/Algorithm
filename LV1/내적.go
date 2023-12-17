func solution(a []int, b []int) int {
	var answer int
	for i := 0; i < len(a); i++ {
		answer += a[i] * b[i]
	}
    return answer
}
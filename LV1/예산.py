def solution(d, budget):
    sorted_d = sorted(d)
    temp_sum = 0
    cnt = 0
    for i in sorted_d:
        temp_sum += i
        if temp_sum > budget:
            return cnt
        cnt += 1
    return cnt

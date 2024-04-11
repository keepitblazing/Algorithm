def solution(a, b):
    answer = 0

    min = a if a < b else b
    max = a if a > b else b

    for i in range(min, max+1):
        answer += i

    return answer

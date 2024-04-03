def solution(n, m, section):
    answer = 0
    part = 0
    for n in section:
        if n > part:
            part = n + m - 1
            answer += 1
    return answer
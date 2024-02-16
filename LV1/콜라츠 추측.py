def solution(num):
    for count in range(500):
        if num == 1:
            return count
        num = num // 2 if num % 2 == 0 else num * 3 + 1
    return -1



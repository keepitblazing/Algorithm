def solution(n):
    change = ''
    while n:
        change = str(n % 3) + change
        n //= 3

    reversed_change = change[::-1]
    answer = int(reversed_change, 3)

    return answer
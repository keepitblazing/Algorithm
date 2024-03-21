def solution(numbers, hand):
    answer = ''
    left = 10
    right = 12
    for i in numbers:
        if i == 0:
            i = 11
        if i in [1, 4, 7]:
            answer += 'L'
            left = i
        elif i in [3, 6, 9]:
            answer += 'R'
            right = i
        else:
            L = abs(i - left)
            R = abs(i - right)
            if L == R:
                if hand == 'right':
                    answer += 'R'
                    right = i
                else:
                    answer += 'L'
                    left = i
            elif L < R:
                answer += 'L'
                left = i
            else:
                answer += 'R'
                right = i
    return answer


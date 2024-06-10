def solution():
    s = input()
    answer = ''
    for i in s:
        if i.isupper():
            answer += i.lower()
        else:
            answer += i.upper()
def solution(a,b,n):
    coke = 0
    while n >= a:
        coke += (n // a) * b
        n = (n // a) * b + (n % a)
    return coke
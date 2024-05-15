def solution(arr):
    x = 0
    while True:
        transformedArr = list(map(lambda num: num // 2 if num >= 50 and num % 2 == 0 else num * 2 + 1 if num < 50 and num % 2 == 1 else num, arr))
        if arr == transformedArr:
            return x
        arr = transformedArr
        x += 1

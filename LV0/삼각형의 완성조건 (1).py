def solution(sides):
    side = sorted(sides, reverse=True)
    return 1 if side[1] + side[2] > side[0] else 2
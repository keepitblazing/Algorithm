def solution(binomial):
    binomial = binomial.split(" ")
    first = int(binomial[0])
    second = binomial[1]
    third = int(binomial[2])
    if second == "+":
        return first + third
    elif second == "-":
        return first - third
    elif second == "*":
        return first * third
    elif second == "/":
        return first / third

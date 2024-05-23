def solution(my_stringm is_suffix):
    if my_string == is_suffix:
        return 1
    return 1 if my_string.endswith(is_suffix) else 0
    
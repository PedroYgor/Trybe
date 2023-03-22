def calculate_summation(n):
    if n == 0:
        return 0
    else:
        return n + calculate_summation(n - 1)


print(calculate_summation(5))

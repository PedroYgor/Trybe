def calculate_summation(n: int) -> int:
    if n == 0:
        return 0
    else:
        return n + calculate_summation(n - 1)


print(calculate_summation(5))

# versão alternativa
# descobri enquanto estudava que a função sum() faz exatamente isso


def calculate_summation_alternative(n: int) -> int:
    return sum(range(n + 1))

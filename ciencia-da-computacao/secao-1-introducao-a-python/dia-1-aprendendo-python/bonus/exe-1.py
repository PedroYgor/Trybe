# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def find_smallest_element(list: list[int]) -> int:
    smaller = min(list)
    return smaller


print(find_smallest_element([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

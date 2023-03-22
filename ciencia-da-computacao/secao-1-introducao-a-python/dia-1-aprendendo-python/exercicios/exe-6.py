def check_type_of_triangle(a: int, b: int, c: int) -> str:
    is_valid_triangle = (
        a > 0 and b > 0 and c > 0 and a + b > c and a + c > b and b + c > a
    )
    if is_valid_triangle:
        if a == b and b == c:
            return "Equilátero"
        elif a == b or b == c or a == c:
            return "Isósceles"
        else:
            return "Escaleno"
    else:
        return "não é triangulo"


print(check_type_of_triangle(3, 3, 3))  # Equilátero
print(check_type_of_triangle(3, 3, 4))  # Isósceles
print(check_type_of_triangle(3, 4, 5))  # Escaleno
print(check_type_of_triangle(1, 2, 5))  # não é triangulo

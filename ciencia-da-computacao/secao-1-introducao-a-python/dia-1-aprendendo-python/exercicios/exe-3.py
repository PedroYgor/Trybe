def make_perfect_square(number: int) -> str:
    if number < 2:
        return "Number must be greater than 1"
    else:
        square = ""
        for i in range(0, number):
            square += "*" * number + "\n"
        return square


print(make_perfect_square(5))

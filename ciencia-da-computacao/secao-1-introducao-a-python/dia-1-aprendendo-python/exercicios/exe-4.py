def find_max_name(names: list) -> str:
    max_name = names[0]
    for name in names:
        if len(name) > len(max_name):
            max_name = name
    return max_name


print(find_max_name(["João", "Maria", "José", "Antônio", "Francisco"]))

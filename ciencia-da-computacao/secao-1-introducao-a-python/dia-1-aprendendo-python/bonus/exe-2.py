# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:

# Estou gostando de tipar as funções, acho que ajuda
# a entender melhor o que está acontecendo


def desenha_asteriscos_em_sequencia(n: int) -> str:
    asteriscos = ""
    for i in range(n):
        quantidade_asteriscos = i + 1
        asteriscos += quantidade_asteriscos * "*" + "\n"

    return asteriscos


print(desenha_asteriscos_em_sequencia(5))

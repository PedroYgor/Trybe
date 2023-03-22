# Exercício 4: Um posto está vendendo combustíveis com a
# seguinte tabela de descontos:
#
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível
# (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço
# do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def calcula_preco_combustivel(litros, tipo_combustivel):
    preco_gasolina = 2.50
    preco_alcool = 1.90
    preco = 0
    combustivel = {"G": preco_gasolina, "A": preco_alcool}

    if tipo_combustivel in combustivel:
        preco = combustivel[tipo_combustivel]
        if litros <= 20:
            desconto = 0.04 if tipo_combustivel == "G" else 0.03
        else:
            desconto = 0.06 if tipo_combustivel == "G" else 0.05

    preco_total = litros * preco * (1 - desconto)
    return preco_total


print(calcula_preco_combustivel(20, "G"))

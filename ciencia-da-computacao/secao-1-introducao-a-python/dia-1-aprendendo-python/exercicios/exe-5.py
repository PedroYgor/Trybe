import math


def calcula_quantidade_de_latas_de_tinta_e_valor_da_compra(metros_quadrados):
    preco_da_lata = 80
    litros_por_lata = 18
    metros_quadrados_por_litro = 3
    quantidade_de_latas_de_tinta = math.ceil(
        metros_quadrados / (metros_quadrados_por_litro * litros_por_lata)
    )
    valor_da_compra = quantidade_de_latas_de_tinta * preco_da_lata
    return (quantidade_de_latas_de_tinta, valor_da_compra)


print(calcula_quantidade_de_latas_de_tinta_e_valor_da_compra(55))

from dataclasses import dataclass


@dataclass
class Estatistica:
    lista: list[int]

    def media(self) -> float:
        soma_da_lista = sum(self.lista)
        total_de_items = len(self.lista)

        resultado = soma_da_lista / total_de_items
        return resultado

    def mediana(self) -> int:
        lista_ordenada = sorted(self.lista)
        tamanho_da_lista = len(lista_ordenada)
        lista_e_par = tamanho_da_lista % 2 == 0

        if lista_e_par:
            posicao_1 = tamanho_da_lista // 2
            posicao_2 = int(posicao_1 - 1)

            resultado = (
                lista_ordenada[posicao_2] + lista_ordenada[posicao_1]
            ) / 2

            return resultado
        posicao = (tamanho_da_lista - 1) // 2
        return lista_ordenada[posicao]

    def moda(self) -> int:
        lista_ordenada = sorted(self.lista)
        aux = 0
        contador = 0
        numero_mais_repetido = []

        for i in range(len(lista_ordenada) - 1):
            if lista_ordenada[i] == lista_ordenada[i + 1]:
                aux += 1
            else:
                if aux > contador:
                    contador = aux
                    numero_mais_repetido.clear()
                    numero_mais_repetido.append(lista_ordenada[i])

                elif aux == contador:
                    numero_mais_repetido.append(lista_ordenada[i])

                aux = 0

        return numero_mais_repetido


a = Estatistica([4, 3, 2, 4, 2, 1, 5])

print(
    f"a lista {a} tem a moda: {a.moda()}, média: {a.media()}, e\
      mediana: {a.mediana()}"
)

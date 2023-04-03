class Tv:
    def __init__(self, volume: int, canal: int, tamanho: int) -> None:
        self.__volume = volume
        self.__canal = canal
        self.__tamanho = tamanho
        self.__ligada = False

    def __str__(self) -> str:
        return f"volume: {self.__volume};  canal: {self.__canal}; \
        tamanho: {self.__tamanho}"

    @property
    def volume(self) -> int:
        return self.__volume

    @property
    def canal(self) -> int:
        return self.__canal

    @property
    def tamanho(self) -> int:
        return self.__tamanho

    @property
    def ligada(self) -> bool:
        return self.__ligada

    def aumentar_volume(self) -> int:
        if self.__volume < 99:
            self.__volume += 1

        return self.__volume

    def diminuir_volume(self) -> int:
        if self.__volume > 1:
            self.__volume -= 1
        return self.__volume

    def modificador_canal(self, canal):
        try:
            new_canal = int(canal)
            if new_canal < 1 | new_canal > 99:
                return print("Esse canal não existe")

            self.__canal = new_canal
            return self.__canal

        except ValueError:
            print("Esse canal não existe")


tv = Tv(21, 22, 14)

print(tv)

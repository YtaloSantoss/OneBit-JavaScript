let spaceshipName = prompt("Digite o nome da nave")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
  let option
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt("O que deseja fazer?\n" +
      "1- Acelerar a nave em 5km/s\n" +
      "2- Desacelerar a nave em 5km/s\n" +
      "3- Imprimir dados de bordo\n" +
      "4- Sair do program")
  }
  return option
}

do {
  chasenOption = showMenu()
} while (chosenOption != "4")
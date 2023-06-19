let spaceship = prompt("Digite o nome da nave")

let charToRepalce = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
  if (spaceship[pos] == charToRepalce) {
    newSpaceship += replacementChar
  } else {
    newSpaceship += spaceship[pos]
  }
}

//bola
//o
//a

// pos = 0 b o newSpaceship = b
// pos = 1 o o newSpaceship = ba
// pos = 2 l o newSpaceship = bal
// pos = 3 a o newSpaceship = bala
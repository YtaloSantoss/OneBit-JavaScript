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

alert("O novo nome da nave é " + newSpaceship)

//bola          b o l a
//bola posições 0 1 2 3


//o
//a

// pos = 0 b o newSpaceship = b
// pos = 1 o o newSpaceship = ba
// pos = 2 l o newSpaceship = bal
// pos = 3 a o newSpaceship = bala
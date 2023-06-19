let spaceshipName = prompt("Qual é o name da nave?")

let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
  if (spaceshipName[i] == "e") {
    break
  }
  invertedName += spaceshipName[i]
}

alert("Nome normal da nave é: " + spaceshipName + "\nNome invertido: " + invertedName)
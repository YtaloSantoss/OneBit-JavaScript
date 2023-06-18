let pilotName = prompt("Qual seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "k/s")

if (confirmVelocity) {
  velocity = newVelocity
}

console.log(velocity)
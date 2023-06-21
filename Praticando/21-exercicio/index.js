let spaceship = {
  velocity: 0,
  spacedUp: function (acceleration) {
    this.velocity += acceleration
  }
}

function registerSpaceship() {
  spaceship.name = prompt("Informe o nome da nave")
  spaceship.type = prompt("Informe o tipo da nave")
  spaceship.maxVelocity = prompt("Informe a velocidade maxima da nave (km/s")
}
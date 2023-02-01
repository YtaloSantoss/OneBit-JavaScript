const veiculo1 = prompt("Inoforme o nome do primeiro veículo: ")
const velocidade1 = prompt("Informe a velocidade do primeiro veícolo: ")

const veiculo2 = prompt("Inoforme o nome do primeiro veículo: ")
const velocidade2 = prompt("Informe a velocidade do primeiro veícolo: ")


if ( velocidade1 > veiculo2) {
  alert(veiculo1 + " é mais rápido do que " + veiculo2)

} else if(velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido do que " + veiculo1)

} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais. ")
}


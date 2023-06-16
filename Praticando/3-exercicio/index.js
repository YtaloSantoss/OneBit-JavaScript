let olderPersonName = prompt("Digite o nome da pessoa mais velha")
let olderPersonAge = prompt("Digite a idade da pessoa mais velha")

let youngerPersonName = prompt("Digite o nome da pessoa mais nova")
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova")

let ageDifference = olderPersonAge - youngerPersonAge

alert(
  "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
  "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
  "\n\nA diferencia de idade é: " + ageDifference
)
let saldo = prompt("informe a quantidade de dinheiro inicial: ")
let opcao = ""

do {
  opcao = prompt(
  "Saldo disponível: R$ " + saldo + 
  "\n1. Adicionar dinheiro" +
  "\n2. Remover dinheiro" +
  "\n3. Sair"
  ) 


  switch (opcao){
    case "1":
      saldo += parseFloat(prompt("informe a quantidade de dinheiro inicial: "))
      break
    case "2":
      saldo -= prompt("informe a quantidade de dinheiro inicial: ")
      break
    case "3":
      alert("Saindo...")
      break
    default: 
      alert("Opção inválida")
    }

} while ( opcao !== "3")
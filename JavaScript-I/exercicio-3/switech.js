const resultado= prompt("Escolha uma alternativa: \na) \nb) \nc)")

switch (resultado) {
  case "a":
    alert("O resultado é 'a'")
  case "b":
    alert("O resultado é 'b'")
    break 
  case "c":
    alert("O resultado é 'c'")
  default:
    alert("Finalizado..")
}
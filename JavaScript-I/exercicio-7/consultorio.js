let fila = []
let opcao = ""

do {
  let pacientes = ""
  for(let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + " º - " + fila[i] + "\n"
  }
  opcao = prompt(
    "Pacientes:\n " + pacientes +
    "\nEscolha uma ação:\n1. Nova paciente\n2. Consultar paciente\n3. Sair" 
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
      case "2":
        const pacienteConsultado = fila.shift()
        alert(pacienteConsultado + " foi removido da fila.")
        break
      case "3":
        alert("Encerrando...")
      default:
        alert("Opção inválida")
  }


} while (opcao  !==  "3") 
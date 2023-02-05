function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triângulo: ")
  const altura = prompt("Informe a altura do triângulo: ")
  return base * altura / 2
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do triângulo: ")
  const altura = prompt("Informe a altura do triângulo: ")
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado: ")
  return lado * lado
}

function calcularAreaTrapezio(){
  const baseMaior = parseFloat(prompt("Inoforme a base maior do trapézio: "))
  const baseMenor = parseFloat(prompt("Inoforme a base menor do trapézio: "))
  const altura = prompt("Informe a altura do trapézio: ")
  return (baseMaior + baseMenor) + altura / 2
}

function calcularAreaCirculo() {
  const raio = prompt("Informe oraio do círculo: ")
  return( 3.14 * raio * raio)
}


function exibirMenu(){
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida")    
    }

    if (resultado) {
      alert("Resultado:" + resultado)
    }
  } while (opcao !== "6" )
}

executar()
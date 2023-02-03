const palavra = prompt("Informe uma palavra: ")

let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

console.log(palavra.length)

if ( palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
}else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}
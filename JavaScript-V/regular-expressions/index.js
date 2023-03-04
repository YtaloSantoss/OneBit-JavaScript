//https://onebitcode.notion.site/03-Express-es-Regulares-no-Javascript-1018456326124239a2abba973a087c8d
// aula  Expressões Regulares no Javascript - Parte 2

//pegando o codigo do País, DDD, e Número
function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    //País
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    //DDD
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    //Número
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new PhoneNumber('+55 (22) 9 9876-5432'))
console.log(new PhoneNumber('+1 (555) a555-999-8888'))
const Adress = require('./Adress')
const Person = require('./Person')

const addr = new Adress('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())
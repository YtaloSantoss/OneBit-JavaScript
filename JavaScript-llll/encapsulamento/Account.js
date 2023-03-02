class Account {
  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }
}

const user = {
  email: "isaac@email.com",
  password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
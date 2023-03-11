let transactions = []


//criamos uma div demos uma (class) e um (id)
function createTransactionContainer(id) {
  const container = document.createElement('div')
  container.classList.add('transaction')
  container.id = `transaction-${id}`
  return container
}
//criamos um span demos uma (class) e tera um (conteudotexto) pra ser exibida
function createTransactionTitle(name) {
  const title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

// ...

function createTransactionAmount(amount) {
  const span = document.createElement('span')
  span.classList.add('transaction-amount')
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  const formatedAmount = formater.format(amount)
  if (amount > 0) {// maoir que zero uma nova entrada quer dizer credito
    span.textContent = `${formatedAmount} C`
    span.classList.add('credit')
  } else {// menor que zero é uma saida é um debit
    span.textContent = `${formatedAmount} D`
    span.classList.add('debit')
  }
  return span
}

//... 
function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
 
  container.append(title, amount)
  document.querySelector('#transactions').append(container)
}


async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then(res => res.json())
} 

// ...

async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
 // updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
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
    span.textContent = `${formatedAmount} Credito`  //positivo deposito 
    span.classList.add('transaction-amount','credit')
  } else {// menor que zero é uma saida é um debit
    span.textContent = `${formatedAmount} Debito`//negativo debitado pagamento 
    span.classList.add('transaction-amount','debit')

  }
  return span
}

 
function createEditTransactionBtn(transaction) {
  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-btn')
  editBtn.textContent = 'Editar'
  editBtn.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id
    document.querySelector('#name').value = transaction.name
    document.querySelector('#amount').value = transaction.amount
  })
  return editBtn
}



function createDeleteTransactionButton(id) {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'Excluir'
  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
    deleteBtn.parentElement.remove()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1)
    updateBalance()
  })
  return deleteBtn
}




function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  const editBtn = createEditTransactionBtn(transaction)
  const deleteBtn = createDeleteTransactionButton(transaction.id)


  container.append(title, amount, editBtn, deleteBtn)
  document.querySelector('#transactions').append(container)
}


async function saveTransaction(ev) {
  ev.preventDefault()

  const id = document.querySelector('#id').value 
  const name = document.querySelector('#name').value
  const amount = parseFloat(document.querySelector('#amount').value)

  if (id) {
    //editar a transação com id
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const transaction = await response.json()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1, transaction)
    document.querySelector(`#transaction-${id}`).remove()
    renderTransaction(transaction)
  } else {  
    //Criar nova transação
    
    const response = await fetch('http://localhost:3000/transactions' ,{
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const transaction = await response.json()
    transactions.push(transaction)
    renderTransaction(transaction)
  }
  

  ev.target.reset()
  updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)




async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then(res => res.json())
} 


function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: "currency"
  })
  balanceSpan.textContent = formater.format(balance)
}



async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
   updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
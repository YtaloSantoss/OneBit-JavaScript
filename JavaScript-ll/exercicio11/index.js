function addContact() {
  //seção onde esta sendo criado tudo 
  const contactSection = document.getElementById('contacts-list')
  // title
  const h3 = document.createElement('h3')
  h3.innerText = "Contato"

  //Elemento principal, lista não ordenada
  const ul = document.createElement('ul')


  //Nome do contato
  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  //Telefonte do contato 
  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  //Endereço
  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for"assress">Encereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'

  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi) 
  ul.appendChild(document.createElement('br'))


  //adicionado tudo na seção elemento principal
  contactSection.append(h3, ul)
}

function removeContact() {

  const contactSection = document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')


  //removendo o ultomo dos contatos 
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}
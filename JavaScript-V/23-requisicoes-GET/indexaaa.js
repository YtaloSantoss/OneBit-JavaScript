function createCountryCard(country) {
  const card = document.createElement('div')
  card.classList.add('country')

  const countryName = country.name.common//aqui foi pego dados pela API sobre nomes dos Países, caminho.
  const name = document.createElement('h2')
  name.textContent = countryName// no h2 que foi criado vai mostrar o nome do País.

  const flag = document.createElement('img')
  flag.src = country.flags.svg//aqui foi pego dados pela API sobre as images, caminho. 
  flag.alt = countryName//um nome da img caso não consiga renderiza.

  card.append(name, flag)
  document.querySelector('#countries').append(card)//renderizando com html, sendo mostrado na tag main.
}

//...........................................................................


async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all') // requisicão GET
  const countries = await response.json()

  console.log(countries)
  countries.forEach(createCountryCard)
}

getCountries()


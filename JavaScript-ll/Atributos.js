const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá, mundo!'

  console.log(input.value)
 // console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function (){
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = 'Digite algo...'
})
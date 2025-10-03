const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const button = document.querySelector('button')
const input = document.querySelector('input')
const output = document.getElementById('output')

button.onclick = () => {
  console.log(`consulting https://viacep.com.br/ws/${input.value.replace('-','')}/json/`)
  fetch(`https://viacep.com.br/ws/${input.value.replace('-','')}/json/`)
  .then(response => response.json())
  .then(data => {
    if (data.erro)
      output.innerText = 'CEP não encontrado!'
    else
      output.innerText = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
  })
  .catch(() => {
    output.innerText = 'Erro ao consultar o CEP!'
  })
}

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()
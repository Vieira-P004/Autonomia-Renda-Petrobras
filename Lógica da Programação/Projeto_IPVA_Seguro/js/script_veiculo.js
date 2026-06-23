const  veiculo = []

const formDados = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    //Criando o obj formData
    const veiculoDados =  new FormData(formDados);

    //Add dados do veiculo
    const carro = {
        placa: veiculoDados.get('placa'),
        modelo: veiculoDados.get('modelo'),
        marca: veiculoDados.get('marca'),
        ano: veiculoDados.get('ano'),
        mercado: veiculoDados.get('mercado'),
        combustivel: veiculoDados.get('combustivel')
    }

    addCarro(carro);

} )


  //FUNÇÃO ADD CARRINHOS
  const addCarro = (objCarro) =>{
    veiculo.push(objCarro)
    listarCarros()

    }


    const listarCarros = () => {

        veiculo.forEach((elem, i) => {
            resultado.innerHTML += `${i+1} ${elem.placa} ${elem.modelo} ${elem.marca} ${elem.ano}`
        })
    }
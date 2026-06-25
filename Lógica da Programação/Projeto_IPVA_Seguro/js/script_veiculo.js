import { calculoIPVA } from "./script_calculo.js";
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
        ano: Number(veiculoDados.get('ano')),
        mercado: Number(veiculoDados.get('mercado')),
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
        resultado.innerHTML = '';

        veiculo.forEach((carro, i) => {
            const valorIPVA = calculoIPVA(carro);
            resultado.innerHTML = `
            ${i+1} - Placa:
            ${carro.placa} | Modelo:
            ${carro.modelo} | Marca: 
            ${carro.marca} | Ano:
            ${carro.ano}|
            ${valorIPVA}
            <br>`
        })
    } 
const formDados = document.querySelector('#formulario');
const Resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const formNumeros = new FormData(formDados);

    let distancia = parseFloat(formNumeros.get('num1'))
    let consumo = parseFloat(formNumeros.get('num2'));
    let preco = parseFloat(formNumeros.get('num3'));

    //QUANT COMBUSTIVEL NECESSARIO PERCORRER O TRAJETO
    let combustivel = distancia / consumo;
    let valor = combustivel * preco;

    Resultado.innerHTML = `Você precisa de : ${combustivel.toFixed(2).replace('.',',')} L  <br>
    Valor total: $${valor.toFixed(2).replace('.',',')}`
})
const formDados = document.querySelector('#formulario');
const Resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const formNumeros = new FormData(formDados);

    let largura = parseFloat(formNumeros.get('largura'));
    let altura = parseFloat(formNumeros.get('altura'));

    let parede = (altura * largura);
    let tinta =  parede/2;

    Resultado.innerHTML = `A área a ser pintada é de: ${parede.toFixed(2).replace('.',',')} m2 <br>
    Quantidade de tinta é: ${tinta.toFixed(2).replace('.',',')} L`
})
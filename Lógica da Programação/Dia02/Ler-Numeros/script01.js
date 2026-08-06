//PEGANDO ELEMENTOS DO DOM
const fomrDados = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');


//CAPTURANDO O EVENTO DE SUBMIT
fomrDados.addEventListener('submit',(evt)=> {
    evt.preventDefault()

    //TRANSFORMANDO O FORMULÁRIO EM OBJETO
    const formNumeros= new FormData(fomrDados);


let num1 = parseFloat(formNumeros.get('num1'));
let num2 = parseFloat(formNumeros.get('num2'));
let num3 = parseFloat(formNumeros.get('num3'));

let media = (num1 + num2 + num3) /3

divResultado.innerHTML = `A média dos números é ${media.toFixed(2).replace('.',',')}`
});
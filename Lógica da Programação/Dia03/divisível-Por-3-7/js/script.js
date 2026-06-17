const formulario = document.querySelector('#formulario');
const reultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let numero = Number(document.querySelector('#numero').value)

    if (numero %3 === 0 && numero %7 === 0){
        reultado.innerHTML = 'O número é divisível por 3 e 7'
    }else{
        reultado.innerHTML = 'O número não é divisível por 3 e 7'
    }
})
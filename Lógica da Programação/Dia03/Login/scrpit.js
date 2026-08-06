const formulario = document.querySelector('#login')
const resultado = document.querySelector('#resultado')

formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let codigo  = document.querySelector('#codigo').value;
    let senha = document.querySelector('#senha').value;

    if(codigo === 'ABCD1234' && senha === '1234'){
        resultado.innerHTML = 'ACESSO PERMITIDO'
    }else{
        resultado.innerHTML = 'ACESSO NEGADO'
    }
} )
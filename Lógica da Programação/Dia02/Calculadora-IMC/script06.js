const formDados = document.querySelector('#formulario');
const Resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formIMC = new FormData(formDados);

    let nome = formIMC.get('nome');
    let peso = parseFloat(formIMC.get('peso'));
    let altura = parseFloat(formIMC.get('altura'))/100;

    let IMC = peso/(altura*altura);

    if(IMC < 20){
        Resultado.innerHTML = `${nome}, seu IMC é de ${IMC.toFixed(2)} esse valor é considerado abaixo do peso`;
    }else if(IMC >= 20 && IMC < 25){
        Resultado.innerHTML = `${nome}, seu IMC é de ${IMC.toFixed(2)} esse valor é considerado normal`;
    }else if(IMC >= 25 && IMC <= 30){
        Resultado.innerHTML = `${nome}, seu IMC é de ${IMC.toFixed(2)} esse valor é considerado excesso de peso`;
    }else if(IMC >= 30 && IMC <= 35){
        Resultado.innerHTML = `${nome}, seu IMC é de ${IMC.toFixed(2)} esse valor é considerado obesidade`;
    }else{
        Resultado.innerHTML = `${nome}, seu IMC é de ${IMC.toFixed(2)} esse valor é considerado obesidade morbida`;
    }

   
}) 
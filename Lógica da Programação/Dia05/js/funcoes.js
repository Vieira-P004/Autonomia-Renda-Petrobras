//SEMPRE QUE IMPORTAR TEM QUE DIZER QUE ELE É UM MODULO NA IMPORTAÇÃO
import { mensagemTxt } from 'mensagem.js';

function exibirMensagem(){
    console.log('olá')
}

exibirMensagem();

function calcMsg(msg){
    console.log(msg)
}

calcMsg('Uma mensagem');

function somaNum(num1, num2){
    return num1 + num2
}

console.log(somaNum(10,7))

const multiplicacao = function(num1, num2){
    return num1 * num2;
}

console.log(multiplicacao(2,4))

// ARROW FUNCTION | FORMA MODERNA REPRESENTADA POR =>

const lerMsg = () => {
    console.log('Minha mensagem')
}

lerMsg();

//----------------------------------
const somaValores = (valor1, valor2) => {
    console.log(parseFloat(valor1) + parseFloat(valor2))
}

somaValores(40,20)

//----------------------------------

const multiplicacaoValores = (valorMult1, valorMult2) => {
    return valorMult1 * valorMult2;
}

console.log(multiplicacaoValores(12,11))

console.log(parseInt(Math.random() * 10));

let cont = 0;
setTimeout(() => {
    cont ++
    console.log('Teste', cont)
}, 2000)


const intervalo = setInterval(() => {
    cont++
    console.log('Teste 2', cont)

    if(cont == 5){
        clearInterval(intervalo)
    }
}, 2000)

console.log(mensagemTxt(objPessoa), `parabéns pelo seu dia!!!`)
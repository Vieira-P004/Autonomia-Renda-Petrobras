const divFor = document.querySelector('#divFor')

//ESTRUTURA DE REPETIÇÃO 
for( i = 0; i < 10; i++){
    console.log(i);
    divFor .innerHTML += `${i} <br>`
}

//CONTADOR E ACUMULADOR
const inputNum = document.querySelector('#num1');
const btnNUM1 = document.querySelector('#btnNum1');
const divResult = document.querySelector('#result-cont-acum');

let cont = 0, contPar = 0, contImpar = 0;
let acum = 0.0;

btnNUM1.addEventListener('click', (evt)=> {
    let numDigitado = Number(inputNum.value)

    //DECLARAÇÃO DE CONTADOR
    cont ++;
    //DECLARAÇÃO DE ACUMULADOR
    acum+= numDigitado

    if(numDigitado %2 === 0){
        contPar++
    }else{
        contImpar++
    }

    divResult.innerHTML = `Total de número digitado ${cont} <br>
    A soma dos números digitados ${acum} <br>
    Total de número Par digitaod: ${contPar} <br>
    Total de número Impar digitado: ${contImpar}`
})

//REPETIÇÃO COM WHILE
const inputFrase = document.querySelector('#msg');
const inputNumRepeticao = document.querySelector('#numRepeticao');
const btnExibir = document.querySelector('#btn-exibir');
const divResultFrase = document.querySelector('#result-frase');

let contFrase = 0;
let totalRepeticao = 0;

btnExibir.addEventListener('click', (evt) => {
    totalRepeticao = Number(inputNumRepeticao.value);
    
    while(totalRepeticao > contFrase){
        divResultFrase.innerHTML += `${inputFrase.value} <br>`
        contFrase++; 
    }
})

//COLEÇÃO DE DADOS - ARRAY
transporte = ['Bicicleta', 'Carro', 'Moto', 'Onibus', 'Avião', 'tototo']

for(i = 0; i < transporte.length;i++){
    console.log(transporte[i])
}

//FOR IN
const divForIn = document.querySelector('#div-ForIn')

for(let pos in transporte){
    console.log(transporte[pos])
    divForIn.innerHTML += `${transporte[pos]} <br>`
}

//FOR OF
const divForOF = document.querySelector('#div-forOf');

for(let elem of transporte){
    divForOF.innerHTML += `${elem} <br>`
}

//COLEÇÃO DE PESSOAS
const pessoas = [
    {nome: 'Bia', idade: 21, renda: 15000},
    {nome: 'levy', idade: 20,renda: 2000},
    {nome: 'Andreia', idade: 45, renda: 2000}
]

//----------------LISTA POR FOR IN -----------------
for(let indiceObjetoPessoa in pessoas){
    console.log(pessoas[indiceObjetoPessoa].nome, pessoas[indiceObjetoPessoa].idade,pessoas[indiceObjetoPessoa.renda])

}
//----------------------LISTA POR FOR OF-------------------
for(let pessoa of pessoas){
    console.log(pessoa.nome, pessoa.idade, pessoa.renda)
}

//FOR EACH
const divForEach = document.querySelector('#div-forEach');
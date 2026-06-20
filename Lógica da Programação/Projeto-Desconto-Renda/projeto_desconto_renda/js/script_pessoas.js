import { calculoDesconto } from "./script_calculos.js"

//DECLARANDO UM ARRAY DE OBJ PESSOAS
const pessoas = []

//PEGANDO ELEMENTOS DO DOM
const formPessoa = document.querySelector('#formPessoa')
const divPessoa = document.querySelector('#div-lista-pessoas')

//CAPTURANDO O EVENTO DO SUBMIT DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {
    evt.preventDefault()

    //TRANSFORMANDO O FORMPESSOAS EM OBJETO
    //CRIANDO O OBJETO DATA FORM
    const dadosForm = new FormData(formPessoa)
    
    //ADICIONANDO AS PESSOAS NO ARRAY
    const pessoa = {
        nome: dadosForm.get('nome'),
        idade: dadosForm.get('idade'),
        renda: dadosForm.get('renda')
    }

    //CHAMANDO A FUNÇÃO
    addPessoa(pessoa)

    //LIMPANDO FORMULÁRIO
    formPessoa.reset()

})

    //FUNÇÃO PARA CRUD
    //FUNÇÃO PARA ADICIONAR PESSOA
    const addPessoa = (objPessoa) => {
        pessoas.push(objPessoa)

        listPessoa()
    }

    //FUNÇÃO LISTAR PESSOAS
    const listPessoa = () => {
        divPessoa.innerHTML = ''

        //ForEach está lendo e percorrendo o array
        pessoas.forEach((elem, i) =>{
            divPessoa.innerHTML += `<div class = 'item-pessoa'> ${i+1} ${elem.nome} ${elem.idade} 
            R$ ${parseFloat(elem.renda)
             .toFixed(2).replace('.',',')} ${calculoDesconto(elem)} <br> </div>`
        })
    }
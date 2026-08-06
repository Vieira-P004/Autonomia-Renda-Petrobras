import { calculoPremiacao } from "./scriptCalculos.js"
import { valorReceber } from "./scriptCalculos.js"
import { valorFinal } from "./scriptCalculos.js"

const coletaResiduo = []

const dadosColeta = document.querySelector('#formColeta')
const resultado = document.querySelector('#resultado')

dadosColeta.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const coleta = new FormData(dadosColeta);

    const dadosResiduo = {
        descricao: coleta.get('descricao'),
        quantidade: Number(coleta.get('quantidade'))
    }

    addColetados(dadosResiduo)
})


const addColetados = (objCarroColeta) => {
    coletaResiduo.push(objCarroColeta)
    listarColetas()
}

const listarColetas = () => {
    resultado.innerHTML = ''

    coletaResiduo.forEach((coleta, i) =>{
        const coletaPremia = calculoPremiacao(coleta)
        const dinheiroColeta = valorReceber(coleta)
        const valorAReceber = coletaPremia + dinheiroColeta


        resultado.innerHTML += `
        ${i+1} - Descrição: 
        ${coleta.descricao} | Quantidade: R$ 
        ${coleta.quantidade} | Valor Receber: R$
        ${dinheiroColeta}| Premiação: R$
        ${parseFloat(coletaPremia).toFixed(2)} | Valor final R$ 
        ${parseFloat(valorAReceber).toFixed(2)} 
        <br>
        `

    })
}
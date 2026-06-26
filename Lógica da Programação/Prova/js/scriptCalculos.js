const calculoPremiacao = (coletados) => {
    let result = 0
    let calcTonelada = (coletados.quantidade / 1000) * 200

    if(coletados.quantidade <= 1000){
        return 'Não atingiu'
    }else if(coletados.quantidade > 1000 && coletados.quantidade < 10000){
        result = calcTonelada * 0.08
    }else if(coletados.quantidade >= 10000 && coletados.quantidade < 15000){
        result = calcTonelada * 0.10
    }else if(coletados.quantidade >= 15000 && coletados.quantidade < 25000){
        result = calcTonelada * 0.15
    }else{
        result = calcTonelada * 0.20
    }

    return result
}

const valorReceber = (coletadosPorTonelada) =>{
    let calcuTonelada = (coletadosPorTonelada.quantidade / 1000) * 200
    return calcuTonelada 
}

const valorFinal = (premiacao, paraReceber) => {
    let valorTotal = premiacao.calculoPremiacao + paraReceber.valorReceber
    return valorTotal
}
export {calculoPremiacao}
export {valorReceber}
export {valorFinal}
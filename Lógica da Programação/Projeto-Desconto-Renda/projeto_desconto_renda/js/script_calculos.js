//Função
const calculoDesconto = (objPessoa) => {
    let resposta = ''
    if((objPessoa.idade < 18 ) || (objPessoa.renda <= 1700 )){
        resposta = 'Isento de Desconto '+ objPessoa.renda * 0.03+' Reais'
    }else if(objPessoa.idade <= 5000){
        resposta = objPessoa.renda * 0.05
    }else if(objPessoa.renda <= 8000  ){
        resposta = objPessoa.renda * 0.08
    }else if(objPessoa.renda <= 10000){
        resposta = objPessoa.renda * 0.10
    }else{
        resposta = objPessoa.renda * 0.03
    }

    return resposta
}

export {calculoDesconto}
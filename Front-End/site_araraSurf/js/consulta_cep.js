//PEGANDO ELEMENTO
const inputCep = document.querySelector('#cep')

//CAPTURANDO EVENTO

// O CHAGE: QUANDO APERTAR O TAB O EVENTO CARREGA
inputCep.addEventListener('change', (evt) =>{
    //PEGANDO O NUMERO DO INPUT E NÃO PERMITINDO OUTRO TIPO DE DADO
    const numCep = evt.target.value.replace(/\D/g,'')

    if(numCep.length != 8){
        alert('CEP Inválido!')
        return
    }

    //CHAMA A FUNÇÃO buscaCep
    buscaDadosCEp(numCep)
} )

//BUSCANDO OS DADOS DOS CEP NO VIACEP
//PQ USAR O 'ASYNC'????
const buscaDadosCEp = async(cep) => {

    try{
        //FETCH TRAS COISAS DE FORA DO SISTEMA
        //QUANDO USAR O ASYNC E QUANDO USAR O AWAIT???

        //TENTANDO BUSCAR DADOS NO VIACEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`) 

        //CONVERTE OS DADOS NO FORMATO JSON
        const dadosEndereco = await response.json()
            exibeDados(dadosEndereco)

            //SE TIVER ALGUM ERRO É CAPTURADO PELO CATCH
    }catch(erro){
        console.log('Erro apresentado ',erro.message)
    }
    
}

//OBJETO LITERAL NOS CAMPOS
const campos = {

    //PQ AQ É ':' E NN '='
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: document.querySelector('#uf')
}

//FUNÇÃO EXIBE DADOS
const exibeDados = (objDados) => {
    const divEndereco = document.querySelector('#dadosEndereco')
    // REMOVE DA DIV DO CLASS OCULTO
    divEndereco.classList.remove('oculto')

    for (let chave in campos){
        // pega div pai dos elementos do endereço
        campos[chave].value = objDados[chave]

        // remove da div o class oculto
        campos[chave].disable = objDados[chave]
    }

    //PUXA O USUARIO PARA O INPUT NUMERO DA CASA COM O FOCUS
    document.querySelector('#numResidencia').focus()
    
}

formPessoa.addEventListener('reset', () => {
    const divEndereco = document.querySelector('#dadosEndereco')

    //REMOVE DA DIV O CLASS OCULTO
    divEndereco.classList.add('oculto')
})
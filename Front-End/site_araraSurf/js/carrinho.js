//CRIANDO ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//FINCAO PARA ADICIONAR O ITEM NO ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', itensCarrinho)
}

//Listar itens do carrinho
const listItens = () => {
    const itensSelecionados = JSON.stringify(localStorage.getItem('itensSessao'))
    return itensCarrinho
}

//MONTANDO A TELA CARRINHO
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTO DO DOM 
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem,i )=> {
        const sectionItem = document.createElement('section')
    sectionItem.setAttribute('class', 'item')
    sectionItem.innerHTML = `<img src= '${elem.caminho_da_imagem}' alt= ${elem.descricao_Produto}/>
        <p class = 'descricao'> ${elem.descricao_Produto}</p> <p class = 'vlr-unitario'> ${elem.valor_unitario}</p> <"input-item" value=${1}> <p class= "tot-item"> ${elem.valor_unitario * 1} </p>
        <img src = "../img/icones/remover.png" alt = "" class= "img-remover"`
        
        sectionItensCarrinho.appendChild(sectionItem)
    });

    
}

export{addItem}
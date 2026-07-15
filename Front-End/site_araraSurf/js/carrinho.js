//CRIANDO ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//FINCAO PARA ADICIONAR O ITEM NO ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

//Listar itens do carrinho
const listItens = () => {
   const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    //const itensSelecionados = JSON.parse(sessionStorage.getItem('itensSessao')) || []
    return itensSelecionados
}

//REMOVER ELEMENTO
const removerItem = (pos)=>{
    itensCarrinho.splice(pos, 1)

    //TIRA DO ARRAY E POE NO LOCAL STORAGE
    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify)
}

export{addItem, listItens, removerItem}
//CRIANDO ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//CRIANDO ARROW ITEM
const fObjItem = (objProduto) => {
    const item = {
        id_produto: objProduto.id_produto,
        descricao_Produto: objProduto.descricao_Produto,
        carrinho_da_imagem: objProduto.carrinho_da_imagem,
        valor_unitario: objProduto.valor_unitario,
        quantidade: 1
    }

    return item
}
//PEGANDO O INDICE DO ARRAY

//FUNCAO PARA ADICIONAR O ITEM NO ARRAY
const addItem = (objItem) => {
    // Procura o produto pelo id
    const indice = itensCarrinho.findIndex(
        elem => elem.id_produto === objItem.id_produto
    );

    if (indice !== -1) {
        // Produto já existe: aumenta a quantidade
        itensCarrinho[indice].quantidade++;
        
    } else {
        // Produto não existe: adiciona ao carrinho
        itensCarrinho.push(fObjItem(objItem));
    }

    localStorage.setItem('itensSessao',JSON.stringify(itensCarrinho)
    );
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
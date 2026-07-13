import {produtos} from "./produto.js";

const sectionCards = document.querySelector('#cards');

    const carregarProduto = (id_secao) =>{

        if(id_secao === 0){
            montandoCards(listarProdutos())
        }else{
            montandoCards(produtosFiltrados(id_secao))
        }

        montarSecoes();
    }

const listarProdutos = () => {
    return produtos
    }

//FILTRANDO AS SEÇÕES COM A COLEÇÃO map
const listarSecoes = () => {
    //CRIANDO COLEÇÃO MAP
    const secoesFiltradas = new Map()

    //PERCORRENDO O ARRAY PRODUTOS E FILTRANDO AS SEÇÕES
    produtos.forEach((elem, i) => {
        secoesFiltradas.set(elem.id_secao, elem)
    })

    //CONVERTENDO O MAP EM ARRAY
    const secoesMenu = Array.from(secoesFiltradas.values())

    //RETORNANDO O ARRAY CONVERTIDO
    return secoesMenu
}

const montarSecoes = () => {
    const ulMenu = document.querySelector('#menu-secoes')

    //LIMPANDO O ELEMENTO ulMenu
    ulMenu.innerHTML = ''

    const liSecao = document.createElement('li')

    //CRIANDO ELEMENTO a
    const aSecao = document.createElement('a')
    aSecao.setAttribute('href', '#')
    aSecao.setAttribute('class', 'lnk-secao')
    aSecao.innerHTML = 'TODOS'

    //CAPTURANDO O CLICK DOS LINKS
    aSecao.addEventListener('click', () => {
        carregarProduto(0)
    })

    liSecao.appendChild(aSecao)

    ulMenu.appendChild(liSecao)

    listarSecoes().forEach((elem, i) => {
        //CRIANDO ELEMENTO li
        const liSecao = document.createElement('li')

        const aSecao = document.createElement('a')
        aSecao.setAttribute('href', '#')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.nome_secao

        //CAPTURANDO O CLICK DOS LINKS
        aSecao.addEventListener('click', () =>{
            montandoCards(produtosFiltrados(elem.id_secao))
        })

        //ADICIONANDO O ELEMENTO FILHO a NO ELEMENTO li
        liSecao.appendChild(aSecao)

        //ADICINANDO O ELEMENTO FILHO li NO ELEMENTO DO DOM ul
        ulMenu.appendChild(liSecao)
    })
}

//FILTRANDO PRODUTOS
const produtosFiltrados =  (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//PEGANDO O INPUT DO DOM
const inputPesquisa = document.querySelector("#pesquisa")

//INPUT PESQUISA
inputPesquisa.addEventListener('input', (evt) => {
    //CAPTURANDO O TEXTO DO INPUT E DEIXANDO MINUSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRAR DADOS MONTANDO OS CARDS PELO FILTER E O INCLUDES
    montandoCards(produtos.filter(elem => elem.descricao_Produto.toLowerCase().
    includes(txtInput)))
    
})

//MONTANDO CARDS
const montandoCards =  (objProdutos) => {
    sectionCards.innerHTML = ''

    objProdutos.forEach((elem, i) => {
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const imgProduto = document.createElement('img')
        imgProduto.setAttribute('src', elem.carrinho_da_imagem)
        imgProduto.setAttribute('alt', elem.descricao_Produto)
        imgProduto.setAttribute('class', 'img_card')

        const h2Titulo = document.createElement('h2')
        h2Titulo.innerHTML = elem.descricao_Produto

        const h3Valor = document.createElement('h3')
        h3Valor.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn_card')
        btnCard.innerHTML = 'Adicionar'

        btnCard.addEventListener('click', () => {
            //REDIRECIONA PARA PÁGINA carrinho.html
            window.location.href = "/paginas/carrinho.html"
        })

        divCard.appendChild(imgProduto)
        divCard.appendChild(h2Titulo)
        divCard.appendChild(h3Valor)
        divCard.appendChild(btnCard)

        sectionCards.appendChild(divCard)
    })
}

carregarProduto(0)
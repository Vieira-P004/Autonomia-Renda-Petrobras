import {produtos} from "./produto.js";

const sectionCards = document.querySelector('#cards');

const listarProdutos = () => {
    /*  sectionCards.innerHTML = ''; */
    montandoCards(produtos)
    }

listarProdutos();

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

    //PERCORRENDO O ARRAY DAS SEÇÕES FILTRADAS
    listarSecoes().forEach((elem, i) => {
        const liSecoes = document.createElement('li')

        //CRIANDO O ELEMENTO a
        const aSecoes =  document.createElement('a')
        aSecoes.setAttribute('href', '#')
        aSecoes.setAttribute('class', 'lnk-secao')
        aSecoes.innerHTML = elem.name_secao

        //CAPTURANDO O CLICK DOS LINKS
        aSecoes.addEventListener('click', () =>{
            //CHAMANDO A FUNÇÃO PRODUTOS FILTRADOS
            montandoCards(produtosFiltrados(elem.id_secao))
        })

        //ADICIONANDO O ELEMENO FILHO a NO ELEMENTO li
        liSecoes.appendChild(aSecoes)

        //ADICIONANDO O ELEMENO FILHO li NO ELEMENTO DO DOM ul
        ulMenu.appendChild(liSecoes)
    })
}

montarSecoes()

//FILTRANDO PRODUTOS
const produtosFiltrados =  (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao)
}

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

        divCard.appendChild(imgProduto)
        divCard.appendChild(h2Titulo)
        divCard.appendChild(h3Valor)
        divCard.appendChild(btnCard)

        sectionCards.appendChild(divCard)
    })
}
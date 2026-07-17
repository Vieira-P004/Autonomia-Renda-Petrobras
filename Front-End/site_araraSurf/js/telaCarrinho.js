import { listItens, removerItem } from "./carrinho.js";

const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTO DO DOM 
    const sectionItensCarrinho = document.querySelector('#navCompras')
    
    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem,i )=> {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'cardCompras')
        sectionItem.innerHTML = 
        `<img src= '${elem.carrinho_da_imagem}' 
        alt= ${elem.descricao_Produto} class="img-item" />
        <p class = "descricao" > ${elem.descricao_Produto}</p>
         <p class = "vlr-unitario">R$ ${elem.valor_unitario}</p> 
         <input type = "number" name ='quant${i}' id= 'quant${i}' class="input-item" value=${elem.quantidade}> 
         <p class= "tot-item">R$ ${(elem.valor_unitario * elem.quantidade).toFixed(2)} </p>`
        
        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src','/img/icones/remover.png')
        imgRemover.setAttribute('alt', 'Remover')
        imgRemover.setAttribute('class','img-remover')

        imgRemover.addEventListener('click', () => {
            if(confirm(`Deseja remover ${elem.descricao_Produto} da sua lista?`)){
                removerItemCarrinho(i)
            }
        })

        const inputQuantidade = sectionItem.querySelector(`#quant${i}`)
        inputQuantidade.addEventListener('change', (e) => {
            if(quantidade < 1 || isNaN(quantidade)){
                quantidade = 1
                e.target.value = 1
            }

            elem.quantidade = quantidade

            const itens = listItens()
            itens[i].quantidade = quantidade
            localStorage.setItem('itensSessao', JSON.stringify(itens))
        })


        //TESTANDO SETA PARA ADD QUANT DE ITENS
        const setaParaAdd = document.createElement('.input-item')
        setaParaAdd.addEventListener('keyup', (event) => {

            if(event.key === 'ArrowUp'){
                elem.quantidade = elem.quantidade++
                console.log(elem.quantidade)
            }
        })



        sectionItem.appendChild(inputQuantidade)
        sectionItem.appendChild(imgRemover)

        sectionItensCarrinho.appendChild(sectionItem)
    });

}



const removerItemCarrinho = (pos)=>{
    removerItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho();
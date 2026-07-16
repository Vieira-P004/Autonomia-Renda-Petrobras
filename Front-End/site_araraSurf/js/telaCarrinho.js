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
         <input type = "number" name ='quant${i}' id= 'quant${i}' class="input-item" value="${elem.quantidade}"> 
         <p class= "tot-item">R$ ${(elem.valor_unitario * elem.quantidade.toFixed(2))} </p>
        <img src = "/img/icones/remover.png" alt ="img-remover" class="img-remover"`
        
        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src','/img/icones/remover.png')
        imgRemover.setAttribute('alt', 'Remover')
        imgRemover.setAttribute('class','img-remover')

        imgRemover.addEventListener('click', () => {
            if(confirm(`Deseja remover ${elem.descricao_Produto} da sua lista?`)){
                removerItemCarrinho(i)
            }
        })

        sectionItem.appendChild(imgRemover)

        sectionItensCarrinho.appendChild(sectionItem)
    });

}

const removerItemCarrinho = (pos)=>{
    removerItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho();
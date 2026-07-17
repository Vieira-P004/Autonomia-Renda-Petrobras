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


        //VALOR SOBE PELO INPUT
        const inputQuantidade = sectionItem.querySelector(`#quant${i}`);
        inputQuantidade.addEventListener("input", () => {

            const quantidade = Number(inputQuantidade.value);
        
            elem.quantidade = quantidade;
              
            const subtotal = quantidade * elem.valor_unitario;

            sectionItem.querySelector(".tot-item").textContent =
                `R$ ${subtotal.toFixed(2)}`;
        
        });

        const semNumNegativo = sectionItem.querySelector(`#quant${i}`)

        semNumNegativo.addEventListener('input', () => {
            const quantidade = Number(semNumNegativo.value)

            if(!Number.isInteger(quantidade) || quantidade < 1){
                alert('A quantidade deve ser um número inteiro maior que zero.')

                quantidade = 1
                semNumNegativo.value = 1
            }

            elem.quantidade = quantidade;

            const subTotal = quantidade * elem.valor_unitario;
            sectionItem.querySelector('.tot-item').textContent = `R$ ${subTotal.toFixed(2)}`
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
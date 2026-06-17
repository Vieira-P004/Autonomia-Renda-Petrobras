const formulario = document.querySelector('#geral')
const resultado = document.querySelector('#resultado')

formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let produto = document.querySelector('#produto').value;
    let valorCompra = parseFloat(document.querySelector('#valorCompra').value)

    let valorVenda;

    if(valorCompra < 10){
        valorVenda = valorCompra * 1.70;
    }else if(valorCompra <= 30){
        valorVenda = valorCompra * 1.50;
    }else if(valorCompra <= 50){
        valorVenda = valorCompra * 1.40;
    }else{
        valorVenda = valorCompra * 1.30;
    }

    resultado.innerHTML = `Produto ${produto}<br>
    Valor de venda R$ ${valorVenda.toFixed(2)}`;
})
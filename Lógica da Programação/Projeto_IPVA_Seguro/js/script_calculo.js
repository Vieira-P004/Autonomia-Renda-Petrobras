let anos = 2026 - 'ano';

const calculoIPVA = (carroPagaIpva) => {
let calculo = ''
    if(carroPagaIpva.combustivel === `gasolina` ){
        calculo = carroPagaIpva.mercado * 0.20;
    }else if(carroPagaIpva.combustivel === `etanol`){
        calculo = carroPagaIpva * 0.15;
    }else if(carroPagaIpva.combustivel === `biocombustivel`){
        calculo = carroPagaIpva * 0.10;
    }else if(carroPagaIpva.combustivel === `hibrido`){
        calculo = carroPagaIpva * 0.08
    }else if(carroPagaIpva.combustivel === `eletrico`){
        calculo = carroPagaIpva * 0.02
    }else if(anos > 20){
        calculo = 'Isento'
    }
}
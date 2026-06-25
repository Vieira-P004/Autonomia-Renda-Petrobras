const calculoIPVA = (carro) => {

    let idadeCarro = 2026 - Number(carro.ano)
    const seguro = carro.mercado * 0.10;

    if(idadeCarro > 20){
        return `IPVA: Isento | Seguro: R$ ${seguro}` 
    }

    let ipva = 0

    if(carro.combustivel === `gasolina` ){
        ipva = carro.mercado * 0.20;

    }else if(carro.combustivel === `etanol`){
        ipva = carro.mercado * 0.15;

    }else if(carro.combustivel === `biocombustivel`){
        ipva = carro.mercado * 0.10;

    }else if(carro.combustivel === `hibrido`){
        ipva = carro.mercado * 0.08

    }else if(carro.combustivel === `eletrico`){
        ipva = carro.mercado * 0.02
    }

    return `IPVA: R$ ${ipva}`;
}



export {calculoIPVA}
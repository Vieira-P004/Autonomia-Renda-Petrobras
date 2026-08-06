const contador = document.querySelector('#divsiveis');
const botao = document.querySelector('#btnDivisao');

botao.addEventListener('click', (evt)=> {

    let cont = 0;
    for(let i = 1; i <= 1000; i++){
        if( i % 7 == 0){
            cont++;
            contador.innerHTML = `São ${[i]}`
        }
        
    }
  
})






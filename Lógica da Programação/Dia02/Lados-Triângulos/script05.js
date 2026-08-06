const formDados = document.querySelector('#formulario');
const Resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt)=> {
    evt.preventDefault();

    const formTriangulo = new FormData(formDados);

    let ladoTriangulo1 = formTriangulo.get('lado1');
    let ladoTriangulo2 = formTriangulo.get('lado2');
    let ladoTriangulo3 = formTriangulo.get('lado3');
    
    if((ladoTriangulo1 != ladoTriangulo3) && (ladoTriangulo1 != ladoTriangulo2) && (ladoTriangulo2 != ladoTriangulo3)){
        Resultado.innerHTML = 'Escaleno';
    }else if((ladoTriangulo1 != ladoTriangulo2)&& (ladoTriangulo2 != ladoTriangulo3) || (ladoTriangulo2 != ladoTriangulo3) && (ladoTriangulo3 != ladoTriangulo1) || (ladoTriangulo1 != ladoTriangulo2) && (ladoTriangulo1 != ladoTriangulo3)){
        Resultado.innerHTML = 'Isóscele';
    }else{
        Resultado.innerHTML = 'Equilátero';
    }
})
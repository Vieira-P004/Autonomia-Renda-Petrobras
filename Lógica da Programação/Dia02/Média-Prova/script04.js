const formDados = document.querySelector('#formulario');
const Resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault(); //IMPEDE QUE A PÁGINA SEJA RECARREGADA

    const formNotas = new FormData(formDados);

    let nomeAluno = (formNotas.get('aluno'));
    let notaAluno1 = parseFloat(formNotas.get('nota1'));
    let notaAluno2 = parseFloat(formNotas.get('nota2'));
    let notaAluno3 = parseFloat(formNotas.get('nota3'));

    let mediaAluno = (notaAluno1 + notaAluno2 + notaAluno3) /3;

    if(mediaAluno >= 6){
        Resultado.innerHTML = `${nomeAluno} foi aprovado com média ${mediaAluno.toFixed(2)}`
    }else{
        Resultado.innerHTML = `${nomeAluno} foi reprovado com média ${mediaAluno.toFixed(2)}`
    }

})
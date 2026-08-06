//DECLARANDO ARRAY
const numeros = [10, 50, 60, 300, 70]

console.log(numeros[1])

//ATRIBUINDO NOVO VALOR
numeros[2] = 124;

//FORMA AMADORA
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

//MODO 1 - NÚMEROS QUE SABEMOS A QUANTIDADE
for(let i = 0;i < 5;i++){
    console.log(numeros[i])
}

//MODO 2 - NÚMEROS QUE NÃO SABEMOS
for(let i = 0; i< numeros.length; i++){
    console.log(numeros[i])
}

//ADICIONA NO FINAL
numeros.push(1502)

//ADICIONA NO INICIO
numeros.unshift(2408)

//FUNÇÃO SPLICE
numeros.splice(3, 2)

//ADICIONA ELEMENTOS
numeros.splice(4, 0, 8888)

//SUBSTITUIr ELEMENTOS
// como funciona: 1 - Posição | 2 - Qual vai ser apagada | 3 - 
numeros.splice(2, 1, 5555)

//MODO 3
//DSEMPENHO MELHOR QUE AS OUTRAS
numeros.forEach((elem, i) => {
    console.log(elem)
})

for (let elem of numeros){
    cont ++;
    console.log(cont, elem)
}
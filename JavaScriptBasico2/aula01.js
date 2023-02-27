//Introdução a arrays
// Seu principal objetivo é ser um espaço contínuo na memória 
// para organizar e armazenar uma coleção de elementos.

/*
array contendo 5 elementos -> n = 5
Índices - posição do elemento no array
[0] [1] [2] [3] [4]

valores em um array
[12] ['Geek'] [true] [48] [52]

Detalhes sobre arrays
- Possuem tamanho infinito
- Podemos colocar qualquer tipo de dado
*/

//Forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia')
//var alunos = ['Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia']
console.log(alunos)

//Forma 2 (Recomendada)
var notas = [1, 3, 5, 7, 9]
console.log(notas)

//Criando um array vazio
var dados = []
console.log(dados)

//Fazendo acesso ao valor de um índice
console.log(notas[2])

//Alterando o valor a partir do índice
notas[2] = 12
console.log(notas)

//Atenção ao acessar um valor com um índice que não existe 
notas[9] = 10
console.log(notas)

console.log(notas[5]) //undefined
console.log(notas[6]) //undefined
console.log(notas[7]) //undefined
console.log(notas[8]) //undefined
console.log(notas[9]) //10

console.log(notas[5] == undefined) //true

if(notas[5] == undefined){
    notas[5] = 54
}
console.log(notas[5])

//Inserindo elementos no final do array
var nomes = ['Paula', 'julia', 'Maria']
console.log(nomes)

nomes.push('Vanessa') //insere o valor no final do array
console.log(nomes)

//tamanho do array
console.log(nomes.length)  //4
var tam = nomes.length

// ordenar dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla']
console.log(alunos)

alunos.sort()  //ordenando array de strings
console.log(alunos)

var precos = [123.55, 42.27, 546.99, 23.12]
console.log(precos)

precos.sort()  //Atenção ordenação de floats nao funciona assim!
precos.sort(function(a, b){return a - b})
console.log(precos)

var idades = [5, 1, 8, 12, 44, 78]
console.log(idades)

idades.sort() //Atenção ordenação de ints nao funciona assim!
idades.sort(function(a, b){return a - b})
console.log(idades)


// Deletando dados de um array
delete idades[3]
//console.log(idades)
idades[3] = 12
console.log(idades)

//idades.splice(3, 1) //a partir do indice 3, delete um elemento
//console.log(idades)


//idades.splice(3, 0 , 56, 89) //a partir do indice 3 não delete nenhum, mas adicioone 56, 89
//console.log(idades)

//Interar em um aarray
for(var i = 0; i < idades.length; i++){
   // console.log(idades[i])
}


//Removendo elementos da ultima posição do array
// idades.pop()// remove e retorna o ultimo elemnto de um array
// console.log(idades)
// var ret = idades.pop()
// console.log(ret)
// console.log(idades)


//Removendo o primeiro elemento de um array
// idades.shift() //remove e retorna o primeiro elemento de um array
// console.log(idades)


//Inserindo elementos no começo do array
// idades.unshift(99)
// console.log(idades)


// retorna um novo array a partir do indice informado
// var novo = idades.slice(3)
// console.log(novo)

// var novo = idades.slice(1, 2) // a partir do indice 1, pegue até o indice 2 sem inclui-lo
// console.log(novo)

//var pares = [2, 4, 6, 8, 10]
//var impares = [1, 3, 5, 7, 9]

//var rest = pares.concat(impares) //concatena os dois arrays
//console.log(rest)

//rest.sort(function(a, b){return a - b})
//console.log(rest)

//4 x 4
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(tabuleiro[0][0])  //linha 0 coluna 0 = 1
console.log(tabuleiro[2][2])  //linha 2 coluna 2 = 11
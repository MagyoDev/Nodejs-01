console.log("Primeira Aula")

var n1 = 10
var n2 = 5

var adicao = n1 + n2
var subtracao = n1 - n2
var multi = n1 * n2
var divisao = n1 / n2
var total = n1 + n2

console.log("Valor da Adição " + adicao)
console.log("Valor da Subtração " + subtracao)
console.log("Valor da Multiplicação " + multi)
console.log("Valor da Divisão " + divisao)

if(total <= 10) {
    console.log("O total é menor ou igual a 10")
}else{
    console.log("O total é maior que 10")
}

var soma = require("./soma")
console.log("Valor da soma " + soma(20,5))

var subtracao = require("./subtracao")
console.log("Valor da subtração " + subtracao(20,5))

var multi = require("./multi")
console.log("Valor da multiplicação " + multi(20,5))

var divisao = require("./divisao")
console.log("Valor da divisão " + divisao(20,5))


var http = require("http")
http.createServer(function(req, res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo")
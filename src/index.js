function calculaSaldoVitorias (vitorias,derrotas){
    return (vitorias - derrotas)
}

let vitorias = 8
let derrotas = 9
let saldoVitorias = calculaSaldoVitorias(vitorias,derrotas)
let nivel = "sem nível"

if (vitorias<=10){
    nivel="ferro"
}
if (vitorias>=11 && vitorias <=20){
    nivel = "bronze"
}
if (vitorias>=21 && vitorias <=50){
    nivel = "prata"
}
if (vitorias>=51 && vitorias <=80){
    nivel = "ouro"
}
if (vitorias>=81 && vitorias <=90){
    nivel = "diamante"
}
if (vitorias>=91 && vitorias <=100){
    nivel = "lendário"
}
if (vitorias>=101){
    nivel = "imortal"
}

console.log (`O herói tem saldo final de ${saldoVitorias} e está no nível **${nivel}**`)
let vitorias = 45
let derrotas = 25

function saldoVitorias(x, y){
    return  x - y
}

let nivel = saldoVitorias(vitorias, derrotas)

if(nivel <= 10) {
    nivel = "Ferro"
}
else if(nivel >= 11 && nivel <= 20){
    nivel = "Bronze"
}
else if(nivel >= 21 && nivel <= 50){
    nivel = "Prata"
}
else if(nivel >= 51 && nivel <= 80){
    nivel = "Ouro"
}
else if(nivel >= 81 && nivel <= 90){
    nivel = "Diamante"
}
else if(nivel >= 91 && nivel <= 100){
    nivel = "Lendário"
}
else if(nivel >= 101){
    nivel = "Imortal"
}

console.log("O herói tem saldo de", saldoVitorias(vitorias, derrotas), "está no nível de", nivel);
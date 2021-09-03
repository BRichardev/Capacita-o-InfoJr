let a = 13
console.log(a)

let lista_convidades = ['João', 'Tadel', 'Oregon']

lista_convidades.push('Mariana')
console.log(lista_convidades)


/*? asasa */

//Função

function quad(num) {
    return num * num
}

let num = 4

console.log(quad(num))

// Dicionario com fuction

let carro = {
    cor: 'vermelho',
    ano: 2003,
    tamanho: 'Médio',
    eletrico: false,
    acelerar: function() {
        console.log('Dejavu I need speed to go oh')
    }
}

// Dicionario + . consegue escolher qual atributo usar: carro.ano/cor/tamanho etc...
if(carro.eletrico){
    console.log('O carro da cor ' + carro.cor +  ' tá em CHOOKK')
}else {
    console.log('Num vai dar meu parceiro')
}

// Atribuição
carro.marca = 'Fiesta'


// Bons exemplos, talvez uma função complexa ou até mesmo ordenada seria um bom desafio mental



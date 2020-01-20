interface Humano {
    nome: string

    // Parâmetro opcional.
    idade?: number

    /*
        Parâmetro obrigatório porém com nome não definido. Pode receber
        um parâmetro com nome a, b, c... etc que não apresentará erro.
    */
    [prop: string]: any 
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('Skywalker')

// Usando Classes...
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome)
    }
}

const mueCliente = new Cliente()
mueCliente.nome = 'Han'
saudarComOla(mueCliente)
mueCliente.saudar('Solo')
console.log(mueCliente.ultimaCompra)

interface FuncaoCalculo {
    (a: number, b: number): number 
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    let total = 1
    
    for (let i = 1; i <= exp; i++) {
        total *= base
    }

    return total
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)
console.log(Array(10).fill(3).reduce((t, a) => t * a))


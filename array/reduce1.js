const alunos = [
    {nome: 'João', note: 7.3, bolsista: false},
    {nome: 'Maria', note: 9.2, bolsista: true},
    {nome: 'Pedro', note: 9.8, bolsista: false},
    {nome: 'Ana', note: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.note).reduce(function(aculmulador, atual){
    console.log(aculmulador, atual)
    return aculmulador + atual
}, 0)

console.log(resultado);
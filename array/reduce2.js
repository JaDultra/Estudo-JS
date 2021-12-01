const alunos = [
    {nome: 'João', note: 7.3, bolsista: false},
    {nome: 'Maria', note: 9.2, bolsista: true},
    {nome: 'Pedro', note: 9.8, bolsista: false},
    {nome: 'Ana', note: 8.7, bolsista: true}
]

//Todos os alunos são bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Algum aluno é bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

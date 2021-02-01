/*
    push: adicionar
    splice: deletar
*/

console.log(`Trabalhando com listas`)

const fruta = new Array(
    `Banana`,
    'Laranja',
    `Abacaxi`,
    `Limão`
)

fruta.push(`Manga`)
fruta.splice(1,1)

console.log(fruta)
console.log(fruta[1])

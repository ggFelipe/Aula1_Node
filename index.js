import PromptSync from "prompt-sync"
import chalk from "chalk"


const prompt = PromptSync()
console.log(chalk.bgWhite.red("Colorido"))

/* const nome = prompt("Digite seu Nome: ")

console.log(`Olá ${nome}!`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 38){
    console.log("Febre")
} else if (temp > 26){
    console.log("F")
} 
else{
    console.log("OK")
} */

/* const salario = Number(prompt("Dgite salario: "))
const aumento = Number(prompt("Digite o aumento: ")) 

const novoSalario = salario * (1 + (aumento/100))

console.log(`Novo Salario e ${novoSalario}`)

const age = Number(prompt("digite seu ano de nascimento: "))
const ano = new Date()

const idade = ano.getFullYear() - age

console.log(`Idade e ${idade}`)

if(idade >= 18){
    console.log("Pai vai Pilotar")
}else{
    console.log("Só em cardeal")
} */

let numero = 1
let cont =0
let soma =0

for(cont; numero != 0; cont++){

    numero = Number(prompt(chalk.bgGray(`digite o ${cont+1}° numero ou 0 para terminar: `)))

    soma += numero
}
cont-=1
console.log(chalk.bgGray(`Média ${soma/cont}`))
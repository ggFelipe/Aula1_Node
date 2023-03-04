import PromptSync from "prompt-sync"

const prompt = PromptSync()

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

const salario = Number(prompt("Dgite salario: "))
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
}

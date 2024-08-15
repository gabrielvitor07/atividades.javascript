const text = document.querySelector("#text")
const boxFilho = document.querySelector(".boxFilho")

let operacao = prompt("Digite a operação: ")

if(`${operacao}`){
    text.textContent = "true";
    boxFilho.style.backgroundColor = "green";
}else{
    text.textContent = "false";
    boxFilho.style.backgroundColor = "red";
}

const pessoa = { 
    name: 'Alice', 
    age: 25, 
    city: 'Wonderland' 
};

let pessoaArray = ["alice",25,"wordeland"]

for (let key in pessoa) {
    console.log(`${key}: ${pessoa[key]}`);
}

let number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}

let count = 1;
do {
    console.log(count);
    count++;
} while (count <= 5);

const personagem = { 
    nome: 'Alice',
    idade: 25, 
    cidade: 'maceio' };
    
       for (let key in personagem) {
           console.log(`${key}: ${personagem[key]}`);
       }
    

   const frutas = ['maça', 'banana', 'laranja'];
   for (let fruta of frutas) {
       console.log(fruta);
   }
   

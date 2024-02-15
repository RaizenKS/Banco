let conta;
const opcoes = document.querySelectorAll(".conta");

opcoes.forEach((opcao,index)=>{
opcao.addEventListener("click", function(){
    if(index == 0){
       conta = new Conta("corrente",0,0,0);
    }

    if(index == 1){
        conta = new Conta("poupanca",0,0,0);
    }

    if(index == 2){
        conta = new Conta("especial",0,0,0);
    }

   document.querySelector("#ato1").style.display = "none";
   document.querySelector("#ato2").style.display = "flex";
})
})

const btnAto2 = document.querySelector("#ato2-confirmar");
const nameIn = document.querySelector("#yourName")
let user = "";

btnAto2.addEventListener("click", ()=>{
user = nameIn.value;
if(user !== ""){
btnAto2.style.display = "none";
nameIn.style.display = "none";
document.querySelector("p").innerHTML = "Bem vindo <br>"+user;


setTimeout(()=>{
    document.querySelector("#ato2").style.display = "none";
    document.querySelector("#ato3").style.display = "flex";

},2000)
}
document.querySelector("#tipo-conta").innerHTML = "conta "+ conta.conta;
saldoCorrente.innerHTML = conta.saldoC;
saldoPoupanca.innerHTML = conta.saldoP;
saldoEspecial.innerHTML = conta.saldoE;


})

const saldoCorrente = document.querySelector("#saldo-corrente");
const saldoPoupanca = document.querySelector("#saldo-poupanca");
const saldoEspecial = document.querySelector("#saldo-especial");



const deposito = document.querySelector("#deposito");
const saque = document.querySelector("#saque");
const transferencia = document.querySelector("#transferencia");
const mudarConta = document.querySelector("#trocar-conta");


deposito.addEventListener("click", function(){
    document.querySelector("#ato3").style.display = "none";
    document.querySelector("#ato4-deposito").style.display = "flex";
})

const valorDeposito = document.querySelector("#valor-deposito");

document.querySelector("#ato4D-confirmar").addEventListener("click",function(){
    let valor= parseInt(valorDeposito.value)
    conta.Deposito(valor)
    document.querySelector("#ato3").style.display = "flex";
    document.querySelector("#ato4-deposito").style.display = "none";

    valorDeposito.value = null;

    saldoCorrente.innerHTML = conta.saldoC;
    saldoPoupanca.innerHTML = conta.saldoP;
    saldoEspecial.innerHTML = conta.saldoE;
})


saque.addEventListener("click", function(){
    document.querySelector("#ato3").style.display = "none";
    document.querySelector("#ato4-saque").style.display = "flex";
})

const valorSaque = document.querySelector("#valor-saque");
document.querySelector("#ato4S-confirmar").addEventListener("click",function(){
    let valor = parseInt(valorSaque.value)
    conta.Saque(valor)
    document.querySelector("#ato3").style.display = "flex";
    document.querySelector("#ato4-saque").style.display = "none";
    saldoCorrente.innerHTML = conta.saldoC;
    saldoPoupanca.innerHTML = conta.saldoP;
    saldoEspecial.innerHTML = conta.saldoE;
    valorSaque.value = null;
})

mudarConta.addEventListener("click", function(){
    document.querySelector("#ato3").style.display = "none";
    document.querySelector("#ato4-mudar").style.display = "flex";
})

document.querySelector("#ato4M-confirmar").addEventListener("click", function(){
   const valorSelect = document.querySelector("#escolha").value;
   conta.MudarConta(valorSelect);
   document.querySelector("#ato3").style.display = "flex";
   document.querySelector("#ato4-mudar").style.display = "none";
   document.querySelector("#tipo-conta").innerHTML = "conta "+ conta.conta;
})

transferencia.addEventListener("click", function(){
    document.querySelector("#ato3").style.display = "none";
    document.querySelector("#ato4-transferencia").style.display = "flex";
})



document.querySelector("#ato4T-confirmar").addEventListener("click", function(){
    const select1 = document.querySelector("#to").value;
    const select2 = document.querySelector("#from").value; 
    let valorTransferencia = document.querySelector("#ato4T-number").value;
    let valor = parseInt(valorTransferencia);
    valorTransferencia = null;

    conta.Transferencia(select1, select2, valor)
    document.querySelector("#ato3").style.display = "flex";
    document.querySelector("#ato4-transferencia").style.display = "none";

    saldoCorrente.innerHTML = conta.saldoC;
    saldoPoupanca.innerHTML = conta.saldoP;
    saldoEspecial.innerHTML = conta.saldoE;
})




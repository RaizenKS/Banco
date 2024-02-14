class Conta{
    constructor(conta,saldoC,saldoP,saldoE){
        this.conta = conta;
        this.saldoC = saldoC;
        this.saldoP = saldoP;
        this.saldoE = saldoE;
    }

    Deposito(valor){
        if(this.conta === "corrente"){
            this.saldoC += valor;
        }
        if(this.conta === "poupanca"){
            this.saldoP += valor;
        }
        if(this.conta === "especial"){
            this.saldoE += valor;
        }
        
    }
    Saque(valor){
        if(this.conta === "corrente"){
            if(this.saldoC >= valor){
                this.saldoC -= valor;
            }
            else{return "saldo insuficiente"}
        }
        if(this.conta === "poupanca"){
            if(this.saldoP >= valor){
                this.saldoP -= valor;
            }
            else{return "saldo insuficiente"}
        }
        if(this.conta === "especial"){
            if(this.saldoE >= valor){
                this.saldoE -= valor;
            }
            else{return "saldo insuficiente"}
        }
    } 

    MudarConta(conta){
        this.conta = conta;
    }

    Transferencia(to,from,valor){

        if(to === "corrente", from === "poupanca"){
            if(this.saldoC >= valor){
                this.saldoC -= valor;
                this.saldoP += valor;
            }    
        }

        if(to === "poupanca", from === "corrente"){
            if(this.saldoP >= valor){
                this.saldoP -= valor;
                this.saldoC += valor;
            }    
        }

        
    }
}







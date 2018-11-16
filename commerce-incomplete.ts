class Bank{
    accountID: string[];
    accountName: string[];
    total: number[];
    accountPin: string[];

    constructor(accountID: string[], accountName: string[], total: number[], accountPin: string[]){
        this.accountID = accountID;
        this.accountName = accountName;
        this.total = total;
        this.accountPin = accountPin;
    }
    //Instance Methods
    deposit(t:Transaction): void {
        if(this.verifyAccount() == true){
            let x = this.accountID.indexOf(t.to) 
            let y = this.accountID.indexOf(t.from)
            this.total[x] += t.amount;
            this.total[y] -= t.amount;
        }
    }
    withdraw(t:Transaction): number {
        if(this.verifyAccess() == true){
            let x = this.accountID.indexOf(t.to)
            let y = this.accountID.indexOf(t.from)
            this.total[x] += t.amount;
            return this.total[y] -= t.amount;
        }
    }
    //Static Methods
    verifyAccount(): boolean {
        for(let i=0;i<this.accountID.length;i++){
            if(this.accountID[i] == t.to){
                return true;
            }
            else{
                return false;
            }
        }
    }
    verifyAccess(): boolean {
       for(let i=0;i<this.accountID.length;i++){
        if(this.accountID[i] == t.to && this.accountPin[i] == t.pin){
            let indexOf = i;
            return true;
        }
        else{
            return false;
        }
       } 
    }
}//end of Bank class


class Customer{
    accountName: string;
    total: number;
    accountID: string;
    accountPin: string;

    constructor(name: string, total: number, accountID: string, accountPin: string){
        this.accountName = name;
        this.total = total;
        this.accountID = accountID;
        this.accountPin = accountPin;
    }

    issueTransaction(to: string, amount: number): Transaction{
            let typeoftrans: string;
            if(amount <= 0){
                let typeoftrans = "withdraw";
            }
            else{
                let typeoftrans = "deposit";
            }

        return new Transaction(this.accountName,this.accountPin,to,typeoftrans,amount);
    }

}//end of Customer class




class Transaction{
    from: string; //where money is coming from
    pin: string;    //pin number
    to: string;   //where the money is going to
    transType: string;  //is it a deposit or withdraw
    amount: number;     //dollar amount

    constructor(from: string, pin: string, to: string, transType: string, amount: number){
        this.from = from;
        this.pin = pin;
        this.to = to;
        this.transType = transType;
        this.amount = amount;
    }



}//end of Transaction class


//creating the tests
function main () : void{

//Create some customers
let charliedata = ["Charlie",500,"Bell","1111"];
const Charlie = new Customer(...charliedata);

let dilliondata = [,,,];
const Dillion = new Customer(...dilliondata);

let delanodata = [,,,];
const Delano = new Customer(...delanodata);

let jamesdata = [,,,];
const James = new Customer(...jamesdata);

let kewendata = [,,,];
const Kewen = new Customer(...kewendata);



let customerdata = [charliedata,dilliondata,delanodata,jamesdata,kewendata];



//Make a Bank
const BankofAmerica = new Bank(...customerdata);


//Have some customers make transactions with the bank





}

//executing the tests
main();











/**
***
*** THIS IS FOR THE NEXT PHASE...PHASE 2!
***
**/



class ATM{


}//end of ATM class




class DebitCard{


}//end of Debit Card class

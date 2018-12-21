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
        if(this.verifyAccount(t) == true){
            let x = this.accountID.indexOf(t.to) 
            let y = this.accountID.indexOf(t.from)
            this.total[x] += t.amount;
            this.total[y] -= t.amount;
        }
    }
    withdraw(t:Transaction): number {
        if(this.verifyAccess(t) == true){
            let x = this.accountID.indexOf(t.to)
            let y = this.accountID.indexOf(t.from)
            this.total[x] += t.amount;
            return this.total[y] -= t.amount;
        }
    }
    //Methods
    verifyAccount(t:Transaction): boolean {
        for(let i=0;i<this.accountID.length;i++){
            if(this.accountID[i] == t.to){
                return true;
            }
        }
        return false;
    }
    verifyAccess(t:Transaction): boolean {
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


} //end of Transaction class


//creating the tests
function main () : void{

//Create some customers
let charliedata = ["Charlie",500,"1111222233334444","1111"];
const Charlie = new Customer(...charliedata);

let dilliondata = ["Dillion",100,"5555666677778888","2222"];
const Dillion = new Customer(...dilliondata);

let delanodata = ["Delano",300,"9999111122223333","3333"];
const Delano = new Customer(...delanodata);

let jamesdata = ["James",700,"4444555566667777","4444"];
const James = new Customer(...jamesdata);

let kewendata = ["Kewen",900,"8888999911112222","5555"];
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






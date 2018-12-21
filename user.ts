abstract class User{
    total: number;
    accountID: string;
    accountPin: string;

    constructor(acid,pn,t){
        this.accountID = acid;
        this.accountPin = pn;
        this.total = t;
    }

    issueTransaction(to: string, amount: number, ty: string): Transaction{
        if(amount <= this.total){
           this.total -= amount;
           return new Transaction(this.accountID,this.accountPin,to,ty,amount);
        }
    };
}

class Customer extends User{

    accountName: string;
    total: number;
    accountID: string;
    accountPin: string;

    constructor(name, t, accountID, pn){
        super(name,pn,t)
        this.accountName = name;
    }

    issueTransaction(to: string, amount: number){
        return super.issueTransaction(to, amount, "cash")
    }
}//end of Customer class

class Merchant extends User{
    storeName: string;
    accountID: string;
    accountPin: string;

    total: number;
    pastPayments[]: IPayment;
    myBank: Bank; 

    receivePayments(payment: IPayment): void{
        this.pastPayments.push(payment);
    }

    processPayment(payment: IPayment): Transaction{
        if(this.myBank.verifyAccess(payment.account, payment.code)){
            this.receivePayments(payment);
            this.total += payment.amount;
        }
    }

    issueTransaction(to: string, amount: number){
        return super.issueTransaction(to, amount, "debit")
    };
}



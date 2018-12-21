interface IPayment{
    amount: number;
    payType: string;
    account: string;
    code: string;
}

interface ICardInfo{
    name: string;
    number: string;
    code: string;
    balance: number;
    limit: number;
}

abstract class Payable{

    abstract pay(amount:number, type: string) : IPayment;
}

abstract class Card{
    name: string;
    number: string;
    code: string;
    balance: number;
    limit: number;

    constructor(info: ICardInfo){
        this.name = info.name;
        this.number = info.number;
        this.code = info.code;
        this.balance = info.balance;
        this.limit = info.limit;
    }

    pay(a: number, t:string) : IPayment {
        if(this.balance+a < this.limit){
            return {
                amount: a,
                payType: t,
                account: this.number,
                code: this.code
            };
        }
        else{
            console.log("not enough money to pay");
            
        }
    }
}

class Debit extends Card{
    constructor(info: ICardInfo){
        super(info);
    }

    //pay
    pay(amount:number,s: string) : IPayment{
        s = "debit"
        return super.pay(amount,s);
    }
}

class Credit extends Card{
    interest: number;
    constructor(info: ICardInfo){
        super(info);
        this.interest = Math.random() * (0.26 - 0.15) + 0.15; //include 0.15 and 0.25
    }

    //pay
    pay(amount:number,s: string) : IPayment{
        s = "credit"
        return super.pay(amount,s);
    }

    //updateBalance
    updateBalance(){
        this.balance *= (1 + this.interest);
    }

}

abstract class Mobile{
    payName: string;
    phoneNumber: string;
    cardNumber: string;
    code: string;
    

    constructor(info: ICardInfo, pn: string){
        this.payName = info.name;
        this.phoneNumber = Mobile.makePhoneNumber();
        this.cardNumber = info.number
        this.code = info.code

    }

    //pay
    pay(a: number, t:string) : IPayment {
        return {
            amount: a,
            payType: t,
            account: this.cardNumber,
            code: this.code
        };
    }

    //making phone number
    static makePhoneNumber(){
        let num = Math.floor(Math.random()*8+1)+Math.random().toString().slice(2,10);
        let x = num.charAt(0)+num.charAt(1)+num.charAt(2); 
        let y = num.charAt(3)+num.charAt(4)+num.charAt(5);
        let z = num.charAt(6)+num.charAt(7)+num.charAt(8);
        let pNumber = "("+x+")"+y+"-"+z;
        return pNumber;
    }
}

class GooglePay extends Mobile{
    constructor(info: ICardInfo, pn:string){
        super(info, pn);
    }

    //pay
    pay(amount:number,t: string) : IPayment{
        t = "GooglePay"
        return super.pay(amount,t);
    }
}

class ApplePay extends Mobile{
    constructor(info: ICardInfo, pn:string){
        super(info, pn);
    }

    //pay
    pay(amount:number,t: string) : IPayment{
        t = "ApplePay"
        return super.pay(amount,t);
    }    
}
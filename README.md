# Commerce
There are two main goals for this project.  The first to see writing a program from a different angle.  Generally speaking we always create something new, however in this project the goal is to watch the program evolve over time as more and more requirements get pushed onto you.  The second goal is to work with TypeScript (TS).  This is a super set of JavaScript that adds many great features on top of JS which most other languages utilize.

## First round of requirements
#### The minimally viable product

You will create four different objects - from classes - which will monitor and direct the flow of payment traffic in modern commerce.
-  Bank : houses financial records to be updated
-  Customer: a person with a name, an account id, a wallet, and secret pinn number to deposit and withdraw money.

#### Bank
The bank keeps track of 4 pieces of information per customer: account id, name, total, and pinn.  You should have an array for each of these where the index numbers all align per customer.  The bank also has 4 essential functions: verifyAccount(), verifyAccess() deposit(), and withdraw().  The verify functions must return a boolean confirming that the user information matches the correct inputs to either deposit or withdraw.

-  **Instance Variables**
    -  accoundID :string[]
    -  accountName :string[]
    -  total :number[]
    -  accountPinn :string[]
-  **Constructor**
    -  accepts a datalist of lists, each of length 4, as input.
    -  loops through the datalist and transferes the data to the 4 instance array variables
-  **Instance Methods**
    -  deposit(t:Transaction) : void {}
    -  withdraw(t:Transaction) : number {}

#### Customer
A customer only has a handful of cash on them in their wallet but can go to the bank to deposit or withdraw money at various times.

-  **Instance Variables**
    -  accountName :string
    -  total :number
    -  accoundID :string
    -  accountPinn :string
-  **Constructor**
    Have the constructor set the persons name, first and last with a simple space, the account ID which is a 16-digit #, and the accountPinn which is a 4-digit number.  Have the constructor randomly generate somewhere between $0 to $200 for
-  **Instance Methods**
    -  issueTransaction() : Transaction {}

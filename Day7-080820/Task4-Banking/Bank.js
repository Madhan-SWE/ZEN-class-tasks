/*
********************************************************************************
            SKELETON FOR MANAGING BANK ACCOUNTS WITH ATM TRANSACTIONS           
********************************************************************************
*/


class ATMTransactions
{
    constructor(type, amount, postBalance)
    {
        this.transactionID = this.generateTransactionID();
        this.date = this.getDate();
        this.amount = amount;
        this.type = type;
        this.postBalance = postBalance;
    }

    generateTransactionID()
    {
        // generate transaction id based on the sequence
        return 135724859;
    }

    getDate()
    {
        // gets date time using js or gets some Other server time and returs 
        // in the expected format of transactions
        return "080820-2314";
    }

}



class Account
{
    constructor(balance=0)
    {
        this.account_no = this.generateAccountNo;
        this.balance = 0;

        // transactios are saved in the transactions list
        this.transactions = [];

        if(balance!=0)
        {
            this.deposit(balance);
        }
    }

    // Transactions
    deposit(amnt)
    {
        this.balance = this.balance + amnt;
        let t = new ATMTransactions("deposit", amnt, this.balannce);
        this.transactions.push(t);

    }

    withdraw(amnt)
    {
        this.balance = this.balance-amnt;
        let t = new ATMTransactions("withhdraw", amnt, this.balannce);
        this.transactions.push(t);
    }


    checkBalance()
    {
        let t = new ATMTransactions("Enquiry", this.balance, this.balannce);
        this.transactions.push(t);
        return this.balance;
    }

    // generate new account no for new customer
    generateAccountNo()
    {
        // returns a account number from sequence
        return 13436458
    }
}

class CurrentAccount extends Account
{
    constructor(balance=0)
    {
        super(balance);
        // saves account type as current
        this.type = "current";
    }
}

class SavingsAccount extends Account
{
    constructor(balance=0)
    {
        super(balance);
        // saves account type as savings
        this.type = "savings";
    }
}

class Customer
{
    constructor(name, address, dob)
    {
        this.name = name;
        this.address = address;
        this.dob = dob;

        //new card number is generated
        this.cardNumber = this.generatedCardNo(); 

        // new random pin is generated
        this.pin = this.generatedNewPin();
        
        this.SavingsAccount = new SavingsAccount();
        this.CurrentAccount = new CurrentAccount();
    }
    generatedCardNo()
    {
         //generated card number is returned
        return 123344
    }
    generatedNewPin()
    {
        //random pin is generated and returned
        return ****
    }
}


class Bank
{
    constructor(code, address)
    {
        this.code = code;
        this.address = address;

        //to maintain list oof customers
        this.customers = [];
    }
    //maintains customer details
    addCustomer(name, address, dob)
    {
        let customer = new Customer(name, address, dob);
        this.customers.push(customer);
    }
    
    //manages
    getCustomer(cardno, pin)
    {
        // filters customer based on card no
        let customer = this.customers.filter(
        function(customer)
        {
            return customer.cardno === cardno;

        });
        // check customer available else throws error
        if(customer.length != 0)
        {
            // checks pin throws error if pin is invalid, returns customer index if pin is valid
            // if the cutomer has both
            return customerIdx;
        }
        return CustomerNotAvailableException;
    }

}
class ATM 
{
    contructor(location, managedby)
    {
        this.location = location;
        // Basically a bank object
        this.managedby = managedby;
    }
    //identifies
    getCustomerIndex(cardno, pin)
    {
        // Gets customer details based on card no and pin
        return this.managedby.getCustomer(cardno, pin);
    }

    chooseAccountObj(customerIdx, type)
    {
        //returns the index based on the required account type
        if (type == "savings")
        {
            return this.managedby.customers[customerIdx].SavingsAccount;
        }
        // else returns for current account object
        return return this.managedby.customers[customerIdx].CurrentAccount;
    }
    
    //transactions
    withDraw(cardno, pin, amnt)
    {
        let customerIdx = this.getCustomerIndex;
        // Prints the list of accounts available and let the user to choose
        // type is input from user 
        let accountObj = this.chooseAccountObj(customerIdx, type);
        //with draw money using account object
        accountObj.withDraw(amnt);
    }

    checkBalance(cardno, pin)
    {
        let customerIdx = this.getCustomerIndex;
        // Prints the list of accounts available and let the user to choose
        // type is input from user 
        let accountObj = this.chooseAccountObj(customerIdx, type);
        // check balance
        return accountObj.balance;
    }
    
    deposit(cardno, pin, amnt)
    {
        let customerIdx = this.getCustomerIndex;
        // Prints the list of accounts available and let the user to choose
        // type is input from user 
        let accountObj = this.chooseAccountObj(customerIdx, type);
        // deposit amnt
        accountObj.deposit(amnt);
    }

}


// Creates a customer 
let c1 = new Customer("Madhan", "Bangalore", "12-34-22");
// adds money to savings and current account
c1.SavingsAccount.deposit(1000);
c1.CurrentAccount.deposit(10000087);


// Uses ATM card to make further transactions

// ATMMachine4 is located in a location
ATMMachine4 = ATM("Koramangala", "AXIS")

// uses ATM card to deposit
// Chooses type of account in the GUI
ATMMachine4.deposit(1225454, ****, 10000);

// uses ATM card to withdraw
// Chooses type of account in the GUI
ATMMachine4.withDraw(1225454, ****, 10000);

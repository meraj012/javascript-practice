// Cunstructor function definition
function BankAccount(accountNumber, ownerName, initialBalance = 0) {
  this.accountNumber = accountNumber;
  this.ownerName = ownerName;
  this.balance = initialBalance;
  this.transactions = [];

  BankAccount.prototype.deposite = function (amount) {
    if (amount <= 0) {
      console.log("deposite amount must be more than zero");
      return;
    }
    this.balance += amount;
    this.transactions.push({ type: "deposite", amount: amount });
    console.log(`deposited ${amount}. New balance: ${this.balance}`);
  };
  BankAccount.prototype.withdraw = function (amount) {
    if (amount <= 0) {
      console.log("withdrawal amount must be greater than zero");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount: amount });
    console.log(`withdrew ${amount}. New balance: ${this.balance}`);
  };
  BankAccount.prototype.checkBlance = function () {
    console.log(`current balance: ${this.balance}`);
    return this.balance;
  };
  BankAccount.prototype.printStatement = function () {
    console.log(`/n---- Statement for ${this.ownerName} ----`);
    this.transactions.forEach((tx, index) => {
      console.log(`${index + 1}. ${tx.type} : $${tx.amount}`);
    });
    console.log(`Final Balance: ${this.balance}`);
  };
}

const account1 = new BankAccount("123456", "Rohit", 1000);

account1.deposite(5000);

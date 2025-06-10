// BankAccount class definition
class BankAccount {
  constructor(accountNumber, ownerName, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.transactions = [];
  }
  deposite(amount) {
    if (amount <= 0) {
      console.log("deposite amount must be more than zero");
      return;
    }
    this.balance += amount;
    this.transactions.push({ type: "deposite", amount: amount });
    console.log(`deposited ${amount}. New balance: ${this.balance}`);
  }
  withdraw(amount) {
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
  }
  chechBalance() {
    console.log(`current balance: ${this.balance}`);
    return this.balance;
  }
  printStatement() {
    console.log(`/n---- Statement for ${this.ownerName} ----`);
    this.transactions.forEach((tx, index) => {
      console.log(`${index + 1}. ${tx.type} : $${tx.amount}`);
    });
    console.log(`Final Balance: ${this.balance}`);
  }
}

const account1 = new BankAccount("123456", "Rohan", 1000);

account1.deposite(500);
// account1.withdraw(200);
// account1.chechBalance();
// account1.printStatement();

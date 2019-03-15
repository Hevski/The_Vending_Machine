class VendingMachine {
    constructor() {
        this.balance = 0;
        this.stock = [];
        this.availableChange = [{'Nickel': 5}, {'Dime': 10}, {'Quarter': 10}, {'Dollar': 20}]

    }

    getBalance() {
        return this.balance;
    }

    checkStock() {
      return this.stock;
    }

    insertMoney(amount) {
      this.balance += amount
    }

    service(stock, change) {
      this.stock = stock
      this.availableChange = change
    }
}

module.exports = {
    VendingMachine
};

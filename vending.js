class VendingMachine {
    constructor() {
        this.balance = 0;
        this.stock = [];

    }

    getBalance() {
        return this.balance;
    }

    insertMoney(amount) {
      this.balance += amount
    }
}

module.exports = {
    VendingMachine
};

const { VendingMachine } = require('./vending.js');
var assert = require('assert');

describe('Vending Machine', function() {

  describe('Balance of money inserted', function() {
    it('Should be zero when the vending machine is initially powered up', function() {
      machine = new VendingMachine();
      assert.equal(0, machine.getBalance())
    });

    it('should increase when money inserted', function() {
      machine = new VendingMachine();
      machine.insertMoney(1)
      assert.equal(1, machine.getBalance())
    });

    xit('should decrease when item purchased', function() {

    })
  });
  describe('Vending machince stock', function() {

    it('should start with no stock', function() {
      machine = new VendingMachine();
      assert.deepStrictEqual([], machine.checkStock())
    });

    it('should be able to add stock', function() {
      machine = new VendingMachine();
      machine.service([{'A': 0.65}, {'B': 1}, {'C': 1.50}], [{'Nickel': 5}, {'Dime': 10}, {'Quarter': 10}, {'Dollar': 20}])
      assert.equal(3, machine.stock.length)
    });

    xit('should remove stock item when customer purchases an item', function() {

    });
  });

  describe('Total Balance of vending machine', function() {

    xit('should increase total balance by item cost', function() {

    })
  })
});

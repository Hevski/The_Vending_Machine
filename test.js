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
    xit('should start with no stock', function() {

    });
    xit('should be able to add stock', function() {
      // machine = new VendingMachine();
      // machine.
    });
    xit('should remove stock item when customer purchases an item', function() {

    });
  });
  describe('Total Balance of vending machine', function() {
    xit('should increase total balance by item cost', function() {

    })
  })
});

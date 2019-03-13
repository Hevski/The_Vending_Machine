const { VendingMachine } = require('./vending.js');
var assert = require('assert');

describe('Vending Machine', function() {

  describe('Balance of money inserted', function() {
    it('Should be zero when the vending machine is initially powered up', function() {
      machine = new VendingMachine();
      assert.equal(0, machine.getBalance())
    });

    xit('should increase when money inserted', function() {

    });

    xit('should decrease when item purchased', function() {
      
    })
  });
  describe('Vending machince stock', function() {
    xit('should start with no stock', function() {

    });
    xit('should be able to add stock', function() {

    });
    xit('should remove stock item when customer purchases an item', function() {

    });
  });
  describe('Total Balance of vending machine', function() {
    xit('should increase total balance by item cost', function() {

    })
  })
});

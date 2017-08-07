
const assert = require('assert');

const totalPhoneBillFunctionTest = require('../totalPhoneBill.js');


describe('totalPhoneBill()', function() {
   it ("should return total amount of 'R4.05' when 1 call and 2 sms's were made", function() {
       assert.equal(totalPhoneBillFunctionTest('call,sms,sms'), 'R4.05');
   });

    it ("should return total amount of 'R0' when no calls or sms's were made", function() {
       assert.equal(totalPhoneBillFunctionTest(''), 'R0');
    });
   });


const assert = require('assert');
const isFrom = require('../isFromBellville');


describe('isFromBellville()', function() {
  //  it ("should return 'false' when regNum is wrong", function() {
  //     assert.equal(isFromBellville('CA 1234', 'CY'), false);
  //  });

   it ("should return 'true' when regNum is from Bellville", function() {
      assert.equal(isFrom('CY 4356', 'CY'), true);
   });
});

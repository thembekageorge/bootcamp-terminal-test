
const assert = require('assert');


const isWeekdayFunctionTest = require('../isWeekday');


const date = new Date();

describe('isWeekday()', function() {
   it ("should return 'true' if today's day is a weekday", function() {
      assert.equal(isWeekdayFunctionTest(date), true);
   });
});

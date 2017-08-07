
var assert = require('assert');

const greetF = require('../greet');


describe('greet()', function() {
    it("should greet Thesh correctly", function(){
      assert.equal(greetF('Thesh'), 'Hello, Thesh');
    });

    it ("should greet Andrew correctly", function() {
       assert.equal(greetF('Andrew'), 'Hello, Andrew')
    });
});

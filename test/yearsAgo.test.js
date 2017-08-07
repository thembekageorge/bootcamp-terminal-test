
const assert = require('assert');

const yearsAgoFunctionTest = require('../yearsAgo');

describe('yearsAg()', function() {
    it ("should return '7 years ago' when given year is 2010", function(){
       assert.equal(yearsAgoFunctionTest(2010), '7 years ago.')
    });


    it ("should return '0 years ago' when given the current year", function() {
        var currentYear = new Date().getFullYear();
         assert.equal(yearsAgoFunctionTest(currentYear), '0 years ago.');
    });
});

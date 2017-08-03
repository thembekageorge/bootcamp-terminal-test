describe('The transportFee', function(){

    it('should return true if regNum starts with CY', function(){
        assert.equal('true', transportFee('CY2258'));
    });
});

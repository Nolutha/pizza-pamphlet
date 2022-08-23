describe('this test is for fromwhere' , function(){

    it('should  return bellville if CY' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');

    });
    it('should return paarl if CJ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl'); 

    });
    
    it('should  return cape town if CA' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');

    });
    
    it('should  return other place if CC ' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');

    });

});



describe('this test is for isfrombellville' , function(){

    it('should return CY 123' , function(){
        assert.equal(isFromBellville('CY 123'), true);

    });
    it('should return CJ 123' , function(){
        assert.equal(isFromBellville('CJ 123'), false);

    });

});


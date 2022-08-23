describe('this test is for greetFunction' , function(){

    it('should return hello,thando' , function(){
        assert.equal(greet('thando'), 'Hello, thando'), "this should be true";

    });
    it('should return hello, sipho' , function(){
        assert.equal(greet('sipho'), 'Hello, sipho'), "this should be true";

    });

});

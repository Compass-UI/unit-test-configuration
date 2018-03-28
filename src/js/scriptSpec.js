
describe('Is function called', function(){
    it('[Function] should be called', function(){
        ccAero = {
            doLogin: function(){

            }
        }
        spyOn(ccAero, "doLogin");
        expect(ccAero.doLogin).toHaveBeenCalled();
    })
})
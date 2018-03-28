
describe('IN AERO.JS:=========================  ', function(){
    describe('Testing constants', function(){
        it('Should match the values', function(done){
            /** Mock ( i.e. exclude jQuery which aero depends on ) */
            define('jquery', [], function(){
                return {
                    jquery: function(){
                        /** Write like your own sort of jQuery */
                    }
                }
            })
            require(['aero', 'jquery'], function(aero, $){

                expect(aero.const.version).toEqual('3.0')
                    
                // spyOn(aero, "doLogin");
                // ccAero.doLogin();
                // expect(ccAero.doLogin).toHaveBeenCalled();
                done();
                
            }, function(){
                done.error(error);
            })

            
        })
    })
})
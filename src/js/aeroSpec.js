
describe('IN AERO.JS:=========================  ', function(){

    var injector;

    beforeEach(function (done) {
        require(["Squire"], function (Squire) {
            injector = new Squire();
            done();
        });
    });

    afterEach(function () {
        injector.remove();
    });

    describe("'Testing constants", function () {
        it("call doLogin()", function (done) {
            injector.mock("aero", {
                doLogin: function () {}
            });

            injector.mock("jquery", {});

            injector.require(["aero", "jquery"],
            	function (aero, jquery) {
	            	spyOn(aero, "doLogin");
	                aero.doLogin();
	                expect(aero.doLogin).toHaveBeenCalled();
	                done();
	            },
	            function (error) {
	            	done.error(error);
	            });
        });
    });

    // describe('Testing constants', function(){
    //     it('Should match the values', function(done){
    //         /** Mock ( i.e. exclude jQuery which aero depends on ) */
    //         define('jquery', [], function(){
    //             return {
    //                 jquery: function(){
    //                     /** Write like your own sort of jQuery */
    //                 }
    //             }
    //         })
    //         require(['aero', 'jquery'], function(aero, $){

    //             expect(aero.const.version).toEqual('3.0')
                    
    //             // spyOn(aero, "doLogin");
    //             // ccAero.doLogin();
    //             // expect(ccAero.doLogin).toHaveBeenCalled();
    //             done();
                
    //         }, function(){
    //             done.error(error);
    //         })
    //     })
    // })

    // END TESTING SUIT
})
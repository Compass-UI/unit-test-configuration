describe("IN AERO.JS", function () {

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


    describe("add function", function () {
        it("calls aero.doLogin()", function (done) {
            injector.mock("aero", {
                doLogin: function () {}
            });

            injector.require(["aero"],
            	function (aero) {
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

    describe('aero constants', function(){
        it("checks aero constants", function(done){
    

        injector.require(["aero"],
            function (aero) {
                expect(aero.const.version).toEqual("3.0");
                done();
            },
            function (error) {
                done.error(error);
            });

        })
    })
});
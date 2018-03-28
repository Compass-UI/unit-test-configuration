
require.config({
    baseUrl: './',
    paths: {
        require: '../node_modules/requirejs/require.js',
        
        shim: {
            'aero': {
                deps: ['require','jquery'],
                init: function(){
                    console.log('require.config');
                }
            }
        }
    }
 })
 
# Installation
## RUN THESE COMMANDS AS ADMINISTRATOR OR YOU MAY FACE MULTIPLE ISSUES:


## Jasmine

[Jasmine GETTING STARTED](https://jasmine.github.io/pages/getting_started.html)

`npm install --save-dev jasmine`
Or,
` yarn add jasmine-core -D`

` jasmine init`

## Karma

`npm install karma --save-dev`
`yarn add karma-requirejs -D`

`npm i karma-chrome-launcher karma-jasmine  karma-requirejs -D`
`C:\Users\v738110\Compass\UnitTests\unit-test-configuration>npm i karma-browserify`

## RequireJS

( Make sure you run with admin rights )
`C:\Users\v738110\Compass\UnitTests\unit-test-configuration>npm i requirejs`

### Command line arguments

run while reporting progress:

`karma start karma.conf.js  --log-level debug`

single run

`$ karma start karma.conf.js  --log-level debug --single-run`

## PhantomJS

`>npm i phantomjs`

### Karma Launchers

Depending on what you will be using, install the following:
`npm install --save-dev karma-phantomjs-launcher`
`npm install --save-dev karma-ie-launcher`
`npm install --save-dev karma-chrome-launcher`

## Browserify

`yarn add browserify`
Or,
`$ npm i browserify`
`C:\Users\v738110\Compass\UnitTests\unit-test-configuration>npm i karma-browserify`

### junit-reporter
`yarn add karma-junit-reporter`

### Watchify
`npm install --save-dev watchify`

## Gulp

`npm i gulp`
`npm i gulp-watch -D    `

`gulp-jasmine-browser`

`C:\Users\v738110\Compass\UnitTests\unit-test-configuration>npm i gulp-open`
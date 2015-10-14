var specReporter = require("jasmine-spec-reporter");
var ScreenShotReporter = require('protractor-screenshot-reporter');


exports.config = {


  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    './*.spec.js'
  ],

  capabilities: {
      browserName: 'chrome',

      // Name of the process executing this capability.  Not used directly by
      // protractor or the browser, but instead pass directly to third parties
      // like SauceLabs as the name of the job running this test
      name: 'Unnamed Job',

      // User defined name for the capability that will display in the results log
      // Defaults to the browser name
      logName: 'Chrome - English',

      // Number of times to run this set of capabilities (in parallel, unless
      // limited by maxSessions). Default is 1.
      count: 1,

      // If this is set to be true, specs will be sharded by file (i.e. all
      // files to be run by this set of capabilities will run in parallel).
      // Default is false.
      shardTestFiles: false,

      // Maximum number of browser instances that can run in parallel for this
      // set of capabilities. This is only needed if shardTestFiles is true.
      // Default is 1.
      maxInstances: 1,

      // Optional: override global seleniumAddress on this capability only.
      seleniumAddress: null
    },


  framework: 'jasmine2',

  // Options to be passed to minijasminenode.
  //
  // See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  },


  onPrepare: function() {
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(new specReporter());

    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
    jasmine.getEnv().addReporter(new ScreenShotReporter({
     baseDirectory: './tmp/screenshots',
     takeScreenShotsOnlyForFailedSpecs: true
    }));



    }



};

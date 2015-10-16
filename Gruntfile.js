module.exports = function(grunt) {
  var HANDLEBARS_EXEC =  process.platform === 'win32' ?
                        'handlebars.cmd' : 'handlebars';//'./node_modules/handlebars/bin/handlebars';
  var CORDOVA_EXEC = process.platform === 'win32' ?
                        'cordova.cmd' : 'cordova';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	run: {
      compileHandleBars: {
        options: {
          // Task-specific options go here.
          wait:true,
          cwd: './www/templates/',
        },
        cmd: HANDLEBARS_EXEC,
        args: [
          'menu.handlebars',
    		  'help.handlebars',
    		  'newReportMap.handlebars',
    		  'newReportCategory.handlebars',
    		  'newReportDetails.handlebars',
    		  'tutorial.handlebars',
          'pictureMiniatureView.handlebars',
          'map.handlebars',
          '-f',
          'templates.js',
        ]
      },

      sayDone:{
        cmd:'say',
        args:['done']
      },
      prepareIOS:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['prepare', 'ios']
      },
      runIOS:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['run', 'ios']
      },
      prepareAndroid:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['prepare', 'android']
      },
      buildAndroid:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['build', 'android']
      },
      runAndroid:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['run', 'android', '--device']
      },
      debugIOS:{
        cmd:'open',
        wait:true,
        args:['run_iOSSimulator_bin.app']
      },
      prepareBrowser:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['prepare', 'browser']
      },
      runBrowser:{
        cmd:CORDOVA_EXEC,
        wait:true,
        args:['run', 'browser']
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-sftp-deploy');
  //grunt.loadNpmTasks('grunt-inject');
  grunt.loadNpmTasks('grunt-run');
  //grunt.loadNpmTasks('grunt-cordovacli');
  //grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
    'run:compileHandleBars'
  ]);
  grunt.registerTask('ios',[
    'run:compileHandleBars',
    'run:prepareIOS',
    'run:runIOS'
  ]);
  grunt.registerTask('android',[
    'run:compileHandleBars',
    'run:prepareAndroid',
    //'run:buildAndroid',
    'run:runAndroid'
  ]);
  grunt.registerTask('androidSim',[
    'run:compileHandleBars',
    'run:prepareAndroid',
    'run:buildAndroid'
  ]);
  grunt.registerTask('iosDebug',[
    'run:compileHandleBars',
    'run:prepareIOS',
    'run:runIOS',
    'run:debugIOS'
  ]);
  grunt.registerTask('browser',[
    'run:compileHandleBars',
    'run:prepareBrowser'
    //'run:runBrowser',
  ]);
};

module.exports = function(grunt) {
  var HANDLEBARS_EXEC =  process.platform === 'win32' ?
                        'handlebars.cmd' : 'handlebars';//'./node_modules/handlebars/bin/handlebars';

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
          'home.handlebars',
          'whatever.handlebars',
          '-f',
          'templates.js',
        ]
      },
      sayDone:{
        cmd:'say',
        args:['done']
      },
      prepareIOS:{
        cmd:'cordova',
        wait:true,
        args:['prepare', 'ios']
      },
      runIOS:{
        cmd:'cordova',
        wait:true,
        args:['run', 'ios']
      },
      debugIOS:{
        cmd:'open',
        wait:true,
        args:['run_iOSSimulator_bin.app']
      }
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
  //grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
    'run:compileHandleBars',
    'run:sayDone'
  ]);
  grunt.registerTask('ios',[
    'run:compileHandleBars',
    'run:prepareIOS',
    'run:runIOS',
    'run:dayDone',
  ]);
  grunt.registerTask('iosDebug',[
    'run:compileHandleBars',
    'run:prepareIOS',
    'run:runIOS',
    'run:debugIOS',
    'run:sayDone',
  ]);
};

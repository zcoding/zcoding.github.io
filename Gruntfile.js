module.exports = function(grunt) {

  grunt.initConfig({

    less: {
      build: {
        files: {
          'build/css/base.css': 'less/base.less',
          'build/css/button.css': 'less/buttons.less'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('build', ['less:build']);

};
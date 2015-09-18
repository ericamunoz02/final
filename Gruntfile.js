module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
   sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/css/style.css': 'src/sass/style.sass'
            }
        }
    },
  uglify: {
    my_target: {
      files: {
        'dist/js/output.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/jquery.countdown/dist/jquery.countdown.js']
      }
    }
  },
watch: {
  css: {
    files: '**/*.sass',
    tasks: ['sass'],
    options: {
      livereload: true,
    },
  },
},
  
  });
  

  // Default task(s).
  grunt.registerTask('default', ['sass', 'uglify','watch']);

};
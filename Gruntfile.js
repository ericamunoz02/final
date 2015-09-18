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
    	build:{
			src:'dist/js/countdown.js',
			dest:'dist/js/countdown.min.js'
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
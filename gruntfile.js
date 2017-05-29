module.exports = function(grunt) {

  grunt.initConfig({ 
   concat: { 
      options: {
        separator: ';'
      },
      dist: { 
        src: ['assets/javascript/*.js'],
        dest: 'assets/dist/main.js'
      },
    },
    uglify: { 
        dist: {
            src: ['assets/dist/main.js'],
            dest: 'assets/dist/main.min.js'
        }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    
  grunt.registerTask('default', ['concat']); 
  grunt.registerTask('dev', ['concat','uglify']); 

};
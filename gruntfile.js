module.exports = function(grunt) {

  grunt.initConfig({ // Вказується конфігурація
   concat: { // злив усіх файлів в один!
      options: {
        separator: ';'
      },
      dist: { // пункти призначення запису файлів
        src: ['assets/javascript/*.js'],
        dest: 'assets/dist/main.js'
      },
      dist: { // пункти призначення запису файлів
        src: ['assets/css/*.css'],
        dest: 'assets/dist/main.css'
      }
    },
    uglify: { // мініфікація
        dist: {
            src: ['assets/dist/main.js'],
            dest: 'assets/dist/main.min.js'
        }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
    
  grunt.registerTask('default', ['concat']); // Реєструєм задачі для виконання!
  grunt.registerTask('dev', ['concat','uglify']); 

};
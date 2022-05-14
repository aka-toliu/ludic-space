module.exports = function(grunt) {
    grunt.initConfig({

        browserSync: {
            public: {
                bsFiles: {
                    src: [
                      'src/**/*', 
                      './'
                    ],

                   
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },

        concat: {

          options: {

              separator: '\n \n'

          },

          mainStyles: {

              src: ['scss/*.scss'],
              dest: 'src/main.scss'
          },

          componentsStyles: {

            src: ['components/**/*.scss'],
            dest: 'src/components.scss'
        },

          scripts: {

            src: ['js/*.js'],
            dest: 'src/main.js'
        },

        componentsScripts: {

          src: ['components/**/*.js'],
          dest: 'src/components.js'
      }

      },

        watch: {
            scripts: {
              files: ['js/*.js', 'scss/*.scss', 'index.html', 'components/**/*.*',],
              tasks: ['concat', 'sass'],
              options: {
                spawn: false,
              },
            },
          },

        sass: {
          dist: {
            files: {
              'src/main.css': 'src/main.scss',
              'src/components.css': 'src/components.scss'
            }
          }
        }
      });



      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-browser-sync');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-concat');


      grunt.registerTask('default', ["concat", 'sass',  'browserSync', 'watch']);
  };
   

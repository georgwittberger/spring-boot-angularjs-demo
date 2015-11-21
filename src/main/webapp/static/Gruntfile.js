module.exports = function(grunt) {
  grunt.initConfig({
    mavenConfig : grunt.file.readJSON('grunt-maven.json'),
    outputDir : '<%= mavenConfig.targetPath %>/classes/static',
    pkg : grunt.file.readJSON('package.json'),
    ts : {
      app : {
        src : [ 'ts/angularjs-demo-app.ts' ],
        out : 'dist/js/angularjs-demo-app.js'
      }
    },
    concat : {
      app : {
        src : [ 'bower_components/angular/angular.js', 'dist/js/angularjs-demo-app.js' ],
        dest : 'dist/js/angularjs-demo-complete.js',
        nonull : true
      }
    },
    uglify : {
      app : {
        src : 'dist/js/angularjs-demo-app.js',
        dest : 'dist/js/angularjs-demo-app.min.js'
      },
      complete : {
        src : 'dist/js/angularjs-demo-complete.js',
        dest : 'dist/js/angularjs-demo-complete.min.js'
      }
    },
    copy : {
      all : {
        files : [ {
          expand : true,
          cwd : 'html/',
          src : [ '**' ],
          dest : '<%= outputDir %>/'
        }, {
          expand : true,
          cwd : 'dist/',
          src : [ '**' ],
          dest : '<%= outputDir %>/'
        } ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask('default', [ 'ts', 'concat', 'uglify', 'copy' ]);
};

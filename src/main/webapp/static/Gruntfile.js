module.exports = function(grunt) {
  grunt.initConfig({
    mavenConfig : grunt.file.readJSON('grunt-maven.json'),
    pkg : grunt.file.readJSON('package.json'),
    ts : {
      default : {
        src : [ 'src/ts/**/*.ts' ],
        out : '<%= mavenConfig.targetPath %>/classes/static/<%= pkg.name %>.js',
        reference: 'src/ts/reference.ts'
      }
    },
    uglify : {
      dist : {
        src : '<%= mavenConfig.targetPath %>/classes/static/<%= pkg.name %>.js',
        dest : '<%= mavenConfig.targetPath %>/classes/static/<%= pkg.name %>.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask('default', [ 'ts', 'uglify' ]);
};

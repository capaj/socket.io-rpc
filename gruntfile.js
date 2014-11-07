module.exports = function (grunt) {

    grunt.initConfig({
        ngAnnotate: {
            app: {
                src: './dist/rpc-client-angular-bundle.js',
                dest: './dist/rpc-client-angular-bundle.annotated.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/rpc-client-angular-bundle.min.js': 'dist/rpc-client-angular-bundle.annotated.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('default', ['ngAnnotate', 'uglify']);

};
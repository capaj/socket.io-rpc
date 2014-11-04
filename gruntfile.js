module.exports = function (grunt) {
    grunt.initConfig({
        ngAnnotate: {
            app: {
                src: './built/moonridge-angular-client.js',
                dest: './built/moonridge-angular-client-annotated.js'
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

    grunt.registerTask('default', ['ngAnnotate', 'uglify']);

};
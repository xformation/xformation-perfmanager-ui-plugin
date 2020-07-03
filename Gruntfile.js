const sass = require('node-sass');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/perfmanager.dark.css': 'src/sass/perfmanager.dark.scss',
                    'src/css/perfmanager.light.css': 'src/sass/perfmanager.light.scss',
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};

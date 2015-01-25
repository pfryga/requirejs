var path = require('path');

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'scripts/lib',
                    install: false,
                    layout: function (type, component) {
                        return component;
                    }
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: '.',
                    baseUrl: '.',
                    dir: 'scripts',
                    paths: {
                        'requireLib': 'scripts/lib/requirejs/require'
                    },
                    modules: [
                        {
                            name: 'scripts/pagesMain',
                            exclude: ['requireLib']
                        }
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['bower']);
    grunt.registerTask('build', ['requirejs']);
};

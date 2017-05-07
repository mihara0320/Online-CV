'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'output/js/main.js',
                dest: 'output/js/main.min.js'
            }
        },
        clean: {
            all: {
                files: [
                    {src: ['output/']}
                ]
            }
        },
        browserify: {
			development: {
                options: {
					transform: [
					['babelify', {presets: ['es2015']}]
					],
                    browserifyOptions: {
                        debug: true,
                    }
                },
                files: {
                    'output/js/main.js': ['app/js/main.js']
                },
            },
        },

        copy: {
            static: {
                files: [{
					expand: true,
					cwd: 'app/',
					src: ['css/*', 'assets/**', 'index.html'],
					dest: 'output/'
				}]
            }
        },
        watch: {

            files: ['app/**'],
            tasks: ['build'],
            options: {atBegin: true}

        },
        connect: {
            local: {
                options: {
                    port: 9000,
                    base: 'output',
                    hostname: '*',
                    keepalive: false
                }
            }
        },
    });
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('update_resources', ['clean:all', 'copy:static']);
    grunt.registerTask('build', ['update_resources', 'browserify:development']);
    grunt.registerTask('run', ['connect', 'watch']);
    grunt.registerTask('start', ['build', 'run']);
    grunt.registerTask('default', ['start']);
};

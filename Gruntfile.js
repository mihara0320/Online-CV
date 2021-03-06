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
            },
            server: {
                options: {
                    port: process.env.PORT || 80,
                    base: 'output',
                    hostname: '*',
                    keepalive: true
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('update_resources', ['clean:all', 'copy:static']);
    grunt.registerTask('build', ['update_resources', 'browserify:development', 'uglify']);
    grunt.registerTask('run', ['connect:local', 'watch']);
    grunt.registerTask('server', ['connect:server']);
    grunt.registerTask('start', ['build', 'run']);
    grunt.registerTask('default', ['server']);

};

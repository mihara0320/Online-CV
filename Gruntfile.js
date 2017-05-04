'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        clean: {
            all: {
                files: [
                    {src: ['output/']}
                ]
            }
        },
        browserify: {
            options: {
                transform: [
                    ['babelify', {presets: ['es2015']}]
                ],
            },
            files: {
                'output/main.js': ['app/main.js']
            },
        },
        copy: {
            static: {
                files: [{
					expand: true,
					cwd: 'app/',
					src: ['*', 'js/controller/*', 'css/*'],
					dest: 'output/'
				}]
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'app/{,*/}*.html',
                    'app/css/{,*/}*.css',
                    'app/js/{,*/}*.js'
                ]
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

    grunt.registerTask('update_resources', ['clean:all', 'copy:static']);
    grunt.registerTask('build', ['update_resources', 'browserify']);
    grunt.registerTask('run', ['connect', 'watch']);
    // grunt.registerTask('server', function (target) {
    //     grunt.task.run([
    //         'connect',
    //         'watch'
    //     ]);
    // });
    grunt.registerTask('default', ['build']);
    grunt.registerTask('start', ['build', 'run']);
};

module.exports = function(grunt){
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: `css/`,
                    src: [`*.css`, `!*.min.css`],
                    dest: `css/`,
                    ext: `.min.css`
                }]
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 1
                },
                src: ['css/*.css', '!css/*.min.css']
            }
        },
        watch: {
            js: {
                files: ['js/*.js', '!js/*.min.js'],
                tasks: ['jshint', 'uglify']
            },
            css: {
                files: ['css/*.css', '!css/*.min.css'],
                tasks: ['csslint', 'cssmin']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
            }
        },
        jshint: {
            files: ['js/*.js', '!js/*.min.js'],
            options: {
                esversion: 6
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.registerTask('default', ['watch']);
};

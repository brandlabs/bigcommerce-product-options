
module.exports = function(grunt) {
    grunt.initConfig({
        eslint: {
            target: [
                'src/**/*.js',
            ],
        },
    });

    // Load this plugin's task(s).

    grunt.loadNpmTasks('grunt-eslint');
    grunt.registerTask('default', ['eslint']);
};

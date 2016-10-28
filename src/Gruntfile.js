var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-js-beautify');
grunt.initConfig({
  jshint: {
    all: ['Gruntfile.js', 'maker/**/*.js']
  },
  js_beautify: {
    options: {
      "end_with_newline": true,
      "indent_size": 2,
      "indent_char": " ",
      "eol": "\n",
      "indent_with_tabs": false,
      "preserve_newlines": true,
      "max_preserve_newlines": 10,
      "jslint_happy": false,
    },
    files: ['maker/**/*.js', 'Gruntfile.js']
  },
  site: {
    site: {
      options: {
        site: {
          title: 'Example',
        },
        templates: './site/templates'
      },
      src: './site/content',
      dest: './dest'
    }
  },
});

grunt.registerTask('default', ['jshint', 'js_beautify:files:all']);
grunt.registerTask('make', ['site']);

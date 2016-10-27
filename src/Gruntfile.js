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
  }
});

//grunt.registerTask('world', 'world task description', function() {
//    console.log('hello world');
//});

grunt.registerTask('doc', 'generates static markdown documentation', function () {
  require('mdoc').run({
    // configuration options (specified below)
    inputDir: 'docs',
    outputDir: 'dist'
  });
});

//grunt.registerTask('hello', 'say hello', function (name) {
//    if (!name || !name.length)
//        grunt.warn('you need to provide a name.');
//
//    console.log('hello ' + name);
//});

//grunt.registerTask('default', ['jshint', 'mochaTest', 'js_beautify:files:all']);
grunt.registerTask('default', ['jshint', 'js_beautify:files:all']);
grunt.registerTask('test', ['mochaTest']);

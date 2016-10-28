var srcdir = "./docs/";
var srcext = '.md';
var outdir = "../docs/";

var commandLineArgs = require('command-line-args');
var options = commandLineArgs([{
  name: 'src',
  alias: 's',
  type: String,
  multiple: true,
  defaultOption: true
}, ]);
if (!options.src) {
  options.src = [];
  console.log("Maker: No files specified. Searching in source directory.");
  var recursive = require('recursive-readdir');
  recursive(srcdir, function (err, files) {
    files.forEach(function (file) {
      if (file.endsWith(".md")) {
        console.log("Maker: Found", file);
        options.src.push(file);
      }
    });
  });
  srcdir = "";
  srcext = "";
}

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

var parsePath = require('parse-filepath');

var fs = require('fs');
fs.readFile('./maker/template.html', 'utf8', function (err, template) {
  options.src.forEach(function (url, index) {
    var mdfile = srcdir + url + srcext;
    url = parsePath(url).name;
    var htmlfile = outdir + url + '.html';
    fs.readFile(mdfile, 'utf8', function (err, contents) {
      if (err) {
        return console.log(err);
      }
      var markdown = marked(contents);
      template = template.replace('<%=content%>', markdown);
      fs.writeFile(htmlfile, template, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Parser: File", url, "Processed.");
      });
    });
  });
});

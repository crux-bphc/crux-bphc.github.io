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
var toTitleCase = require('to-title-case');

var fs = require('fs');

var loadtemplate = function () {
  fs.readFile('./maker/template.html', 'utf8', function (err, template) {
    options.src.forEach(function (url, index) {
      var mdfile = srcdir + url + srcext;
      //console.log("Markdown File:", mdfile);
      //console.log("File Directory:", parsePath(url).dir);
      var htmlfile = parsePath(url).path.replace("docs/", "");
      htmlfile = htmlfile.replace("docs", "");
      htmlfile = htmlfile.replace('.md', '');
      htmlfile = outdir + htmlfile + ".html";
      //console.log("Output File:", htmlfile);
      fs.readFile(mdfile, 'utf8', function (err, contents) {
        //console.log("File Title:", contents.split('\n')[0]);
        var localfile = htmlfile;
        if (err) {
          return console.log(err);
        }
        var markdown = marked(contents);
        var localtemplate = template;
        var title = toTitleCase(parsePath(localfile).name);
        localtemplate = localtemplate.replace('<%=content%>', markdown);
        localtemplate = localtemplate.replace('<%=title%>', title);
        var mkdirp = require('mkdirp');
        mkdirp(parsePath(htmlfile).dir, function (err) {
          if (err) {
            return console.log(err);
          }
          fs.writeFile(localfile, localtemplate, function (err) {
            if (err) {
              return console.log(err);
            }
            console.log("Maker: File", url + srcext, "Processed.");
          });
        });
      });
    });

  });
};

var makelinks =  function(){
  fs.readFile('./maker/template.html', 'utf8', function (err, template) {
    var filelist = [];
    options.src.forEach(function (url, index) {
      var mdfile = srcdir + url + srcext;
      //console.log("Markdown File:", mdfile);
      //console.log("File Directory:", parsePath(url).dir);
      var htmlfile = parsePath(url).path.replace("docs/", "");
      htmlfile = htmlfile.replace("docs", "");
      htmlfile = htmlfile.replace('.md', '');
      htmlfile = outdir + htmlfile + ".html";
      var title = toTitleCase(parsePath(htmlfile).name);
      var listentry = {};
      listentry.title = title;
      listentry.link = htmlfile;
      filelist.push(listentry);
      //console.log("Output File:", htmlfile);
    });
    var mdlist = "# All Pages\n\nList of all pages in *foss@bphc* repository.\n\n";
    filelist.forEach(function (elem, index) {
      // console.log("Lister:", index, elem.title, elem.link);
      mdlist += index + ". **[" + elem.title + "](" + elem.link.replace("../docs/","docs/") + ")** at `" + elem.link.replace("../docs/","/docs/") + "`\n";
    });
    var htmllist = marked(mdlist);
    template = template.replace('<%=content%>', htmllist);
    template = template.replace('<%=title%>', "All Pages");
    var mkdirp = require('mkdirp');
    var filepath = "../index.html";
    mkdirp(parsePath(filepath).dir, function (err) {
      if (err) {
        return console.log(err);
      }
      fs.writeFile(filepath, template, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Lister: Storing links in",filepath);
      });
    });
    //console.log(template);
  });
}

var start = function () {
  if (!options.src) {
    options.src = [];
    console.log("Indexer: No files specified. Searching in source directory.");
    var recursive = require('recursive-readdir');
    recursive(srcdir, function (err, files) {
      files.forEach(function (file) {
        if (file.endsWith(".md")) {
          //console.log("Maker: Found", file);
          options.src.push(file);
        }
      });
    });
    srcdir = "";
    srcext = "";
  }
  loadtemplate();
  makelinks();
};


start();

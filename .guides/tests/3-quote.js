var cssutils = require('codio-css-utils');
var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/3-our-quote-example/style.css";
var indexpath = basepath + "/3-our-quote-example/index.html";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  if (!ast.selector_has_property(".quote","font-size","1.2em")) {
    errors.push(".quote should have a font size of 1.2em");
  }
  if (!ast.selector_has_property(".quote","background-color","#f9f9f9")) {
    errors.push(".quote should have a background color of #f9f9f9");
  }
  if (!ast.selector_has_property(".quote","border-left","10px solid #cccccc")) {
    errors.push(".quote should have border-left : 10px solid #cccccc;");
  }
  if (!ast.selector_has_property(".quote","padding","10px")) {
    errors.push(".quote should have a padding of 10px");
  }
}



if (!fs.existsSync(indexpath)) {
    errors.push("index.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(indexpath));

    if (!$("p:nth-of-type(2)").hasClass('quote')) {
        errors.push("The second paragraph should have quote class");
    }
}


if( errors.length <= 0 ) {
  process.stdout.write('Well done!!!\n');
  process.exit(0);
}
else {
  process.stdout.write(errors.join("\n"));
  process.stdout.write('\n');
  process.exit(1);
}


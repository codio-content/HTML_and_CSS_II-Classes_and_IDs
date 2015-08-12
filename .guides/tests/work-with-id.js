var cssutils = require('codio-css-utils');
var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/4-css-ids/style.css";
var indexpath = basepath + "/4-css-ids/example.html";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  
  var check_rules = {
    "selector": "#footer",
    "check" : {
      "font-size":"80%",
      "color":"gray"
    }
  }
  
  ast.check(check_rules, errors);
  
}



if (!fs.existsSync(indexpath)) {
    errors.push("example.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(indexpath));
    var $p_content = $("p#content");
    var $p_footer = $("p#footer");
  
    if (!($p_content && $p_content.length == 1 && $p_content.text().length > 0)) {
      errors.push("There should be a p with id content");
    }
  
    if (!($p_footer && $p_footer.length == 1 && $p_footer.text().length > 0)) {
      errors.push("There should be a p with id footer");
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


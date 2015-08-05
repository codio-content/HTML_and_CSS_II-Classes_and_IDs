var cssutils = require('codio-css-utils');
var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/6-multiple-classes-challenge/style.css";
var indexpath = basepath + "/6-multiple-classes-challenge/index.html";


var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  if (!ast.selector_has_property(".normal","font-size","12px")) {
    errors.push(".normal should have font-size of 12px");
  }
  if (!ast.selector_has_property(".big","font-size","18px")) {
    errors.push(".big should have font-size of 18px");
  }
  if (!ast.selector_has_property(".orange","color","orange")) {
    errors.push(".orange should have orange color");
  }
  if (!ast.selector_has_property(".blue","color","blue")) {
    errors.push(".blue should have blue color");
  }
  if (!ast.selector_has_property(".left","text-align","left")) {
    errors.push(".left should have text align left");
  }
  if (!ast.selector_has_property(".center","text-align","center")) {
    errors.push(".center should have text align center");
  }
  if (!ast.selector_has_property(".right","text-align","right")) {
    errors.push(".right should have text align right");
  }
}



if (!fs.existsSync(indexpath)) {
    errors.push("index.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(indexpath));
    var $p1 = $("p:nth-of-type(1)");
    var $p2 = $("p:nth-of-type(2)");
    var $p3 = $("p:nth-of-type(3)");
  

    if (!($p1.hasClass('normal') && $p1.hasClass('orange') && $p1.hasClass('left'))) {
        errors.push("The first paragraph should have classes normal orange left");
    }
  
    if (!($p2.hasClass('big') && $p2.hasClass('blue') && $p2.hasClass('center'))) {
        errors.push("The second paragraph should have classes big blue center");
    }
  
    if (!($p3.hasClass('big') && $p3.hasClass('orange') && $p3.hasClass('right'))) {
        errors.push("The third paragraph should have classes big orange right");
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


var cssutils = require('codio-css-utils');


var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/11-same-rule-multiple-elements/withoutclasses.html";

var ast = cssutils.get_ast(stylepath);

//console.dir(ast.get_declarations_for_selector("h1"));

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  if (!ast.selector_and_has_property(["h1","h2"],"font-weight","bold")) {
    errors.push("h1 and h2 should have font-weight bold");
  }
  if (!ast.selector_and_has_property(["h2","p"],"color","gray")) {
    errors.push("h2 and p should have a color gray");
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


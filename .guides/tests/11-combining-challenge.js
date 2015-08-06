var cssutils = require('codio-css-utils');

var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/11-combining-challenge/style.css";

var ast = cssutils.get_ast(stylepath);


var footer_li_check = {
  "selector" : "#footer-nav li",
  "check" : "  display: inline; background-color:transparent; margin:2px; padding:0px; font-size:80%;"
}

var h2_selected_check = {
  "selector" : "h2.selected",
  "check" :"background-color:lightsalmon; font-weight: normal; margin-left: 40px;"
}

var p_selected_check = {
  "selector" : "p.selected",
  "check" :"background-color:lightsalmon; font-weight: normal; margin-left: 60px; color:black;"
}

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed"); 
} else {
  
  ast.check(footer_li_check,errors);
  ast.check(h2_selected_check,errors);
  ast.check(p_selected_check,errors);
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


var cssutils = require('codio-css-utils');
var fs = require('fs');


var errors = [];
var basepath = '/home/codio/workspace';
var stylepath = basepath + "/18-final-challenge/style.css";
var indexpath = basepath + "/18-final-challenge/index.html";
var origpath = basepath + "/.guides/tests/final-challenge-orig.html"

var orig = fs.readFileSync(origpath)
var curr = fs.readFileSync(indexpath)

if (orig.toString() !=  curr.toString()) {
  errors.push("You modified the index.html, it's not allowed")
}

var ast = cssutils.get_ast(stylepath);

if (ast.ast == undefined) {
  errors.push(stylepath + " doesn't exist or cannot be parsed");
} else {

  // Because we don't specify a CSS selector strategy in the challenge description,
  // we need to be prepared for _at least_ those strategies we've introduced up
  // to this point - that includes child and descendant relationships.
  if (
    // Descendant to the nested ul
    !ast.selector_has_property("#header-nav li ul","font-size","80%")
    // Descendant to the nested li
    && !ast.selector_has_property("#header-nav li ul li", "font-size", "80%")
    // Child to the nested ul
    && !ast.selector_has_property("#header-nav>li>ul", "font-size", "80%")
    // Child to the nested li
    && !ast.selector_has_property("#header-nav>li>ul>li", "font-size", "80%")
    // Mix of child and descendant
    && !ast.selector_has_property("#header-nav li>ul", "font-size", "80%")
    && !ast.selector_has_property("#header-nav li>ul>li", "font-size", "80%")
  ) {
    errors.push("You didnt put a font-size of 80% on Article1 and Article2 in #header-nav");
  }

  if (!ast.selector_has_property("#footer-nav","font-size","60%")) {
    errors.push("You didnt put a font-size of 60% on #footer-nav");
  }

  if (!ast.selector_has_property("#footer-nav","padding-left","0px")) {
    errors.push("You didnt put a padding-left of 0px on #footer-nav");
  }

  if (!ast.selector_has_property("h1.small","font-size","70%")) {
    errors.push("You didnt put a font-size of 70% on H1 with class small");
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

var fs = require('fs');
var cheerio = require('cheerio');


var errors = [];
var path = '/home/codio/workspace/6-when-to-use-what/challenge.html'

if (!fs.existsSync(path)) {
    errors.push("challenge.html doesnt exist")
} else {
    var $ = cheerio.load(fs.readFileSync(path));

    if ($("ul").attr("id") != "navigation") {
        errors.push('You didn\'t put id="navigation" on the right tag');
    }
    
    if (!$("li:nth-of-type(1)").hasClass('current')) {
         errors.push("The class 'current' is not on the right tag");
    }
    
    if (!$("p:nth-of-type(2)").hasClass('highlighted')) {
         errors.push("The class 'highlighted' is not on the right tag");
    }
    
}


if( errors.length <= 0 ) {
    process.stdout.write('Well done!!!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}

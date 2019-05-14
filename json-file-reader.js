const fs = require('fs')

let fileReader = function (filename, JSONreader) {
    fs.readFile(filename, 'utf8', function (err, contents) {
        if (err) {
            throw err
        };
        let text = JSON.parse(contents);
        return JSONreader(text);
    });
}

module.exports = fileReader
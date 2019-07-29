var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf8', function(err, data) {
    var dataToFile;
    console.log('Zawartość katalogu:'.cyan);
    data.forEach(function(item) {
        dataToFile += item + '\r\n';
    });
    console.log(dataToFile);
    fs.writeFile('./files.txt', dataToFile, 'utf-8', function(err) {
        if(err) throw err;
        console.log('File names saved in "files.txt"'.bold.magenta);
    });
});

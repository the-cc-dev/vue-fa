var fs = require('fs');

function readFiles(dirname, sub, onFileContent, onError) {
  fs.readdir(dirname + '/' + sub, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    
    filenames.forEach(function(filename) {
      fs.readFile(dirname + '/' + sub + '/' + filename, 'utf-8', function(err, content) {
        
        console.log(dirname + '/' + sub + '/' + filename);
        
        if (err) {
          // onError(err);
          // return;
        }
        else {
          onFileContent(sub, filename, content);
        }
      });
    });
  });
}

function processFile(sub, filename, content) {

    file = filename.split('.');

    if (file[1] === 'svg') {
        content = 'module.exports = {template:\'<div class="ico">' + content + '</div>\'};';

        fs.writeFileSync('./js/' + sub + '/' + file[0] + '.js', content, {
            encoding:'utf8',
            flag:'w'
        });

        // fs.unlink('./svg/' + sub + '/' + filename);
    }
}

readFiles('svg/', 'brands', processFile, function(err) {throw err;});
readFiles('svg/', 'regular', processFile, function(err) {throw err;});
readFiles('svg/', 'solid', processFile, function(err) {throw err;});
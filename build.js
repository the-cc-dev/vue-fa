var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

readFiles('svg/', function(filename, content) {

    file = filename.split('.');

    if (file[1] === 'svg') {
        content = 'module.exports = {template:\'<div class="ico">' + content + '</div>\'};';

        fs.writeFileSync('./js/' + file[0] + '.js', content, {
            encoding:'utf8',
            flag:'w'
        });

        fs.unlink('./svg/' + filename);
    }

}, function(err) {
  throw err;
});
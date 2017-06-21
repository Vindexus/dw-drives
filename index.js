var moduleData = require('./drives_data_raw.json');
var colors = require('colors');

let Drives = function () {
}

Drives.prototype.extendDataCompiler = function (compiler) {
  compiler.registerStep((data) => {
    console.log('='.repeat(60).bgWhite.black)
    console.log('');
    console.log('Running '.cyan + 'dw-drives'.bgCyan.black + ' module compile step'.cyan);
    console.log('');
    //This is just a sample module, so all we're doing is giving each class the same drives
    for(var key in data.classes) {
      var cls = data.classes[key];
      delete cls.alignments;
      delete cls.alignments_list;
      //Find the drives list that matches this class
      var foundIt = false
      moduleData.lists.forEach(function (driveList) {
        if(driveList.classes.indexOf(key) >= 0) {
          cls.drives = driveList.drives;
          console.log('Removed alignments for ' + cls.name.green + ', replaced with ' + cls.drives.list.length + ' drives from: ' + driveList.name.yellow)
          foundIt = true;
        }
      });
      if(!foundIt) {
        console.log('Removed alignments for ' + cls.name.red + ' but could not find a drives list.');
      }
      data[key] = cls;
    };

    return data;
  });
}

Drives.prototype.extendDataCompiler = function (compiler) {
  this.extendCompiler(compiler);
}

module.exports = Drives;
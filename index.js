var moduleData = require('./drives_data_raw.json');
var colors = require('colors');

let Drives = function () {
}

Drives.prototype.extendDataCompiler = function (compiler, opts) {
  compiler.registerStep((data) => {
    console.log('='.repeat(60).cyan)
    console.log('Running '.cyan + 'dw-drives'.bgCyan.black + (' module ' + opts.compilerType + ' compile step').cyan);
    //This is just a sample module, so all we're doing is giving each class the same drives
    for(var key in data.classes) {
      var cls = data.classes[key];
      delete cls.alignments;
      delete cls.alignments_list;
      delete compiler.config.pointers['classes.' + key + '.alignments_list'];

      //Find the drives list that matches this class
      var foundIt = false
      moduleData.lists.forEach(function (driveList) {
        if(driveList.classes.indexOf(key) >= 0) {
          console.log('driveList', driveList);

          //This clones it to avoid pointer issues
          //TODO: Use a better cloning function
          cls.drives_list = driveList.drive_keys.map(function (key) {
            return key;
          });
          console.log('cls.drives_list', cls.drives_list);
          compiler.config.pointers['classes.' + key + '.drives_list'] = 'drives';
          console.log('Removed alignments for ' + cls.name.green + ', replaced with ' + cls.drives_list.length + ' drives from: ' + driveList.name.yellow);
          console.log('cls.drives_list', cls.drives_list);
          console.log('Pointers: ' + Object.keys(compiler.config.pointers));
          foundIt = true;
        }
      });
      if(!foundIt) {
        console.log('Removed alignments for ' + cls.name.red + ' but could not find a drives list.');
      }
      data[key] = cls;
    };
    data.drives = moduleData.drives;
    console.log('='.repeat(60).cyan)
    return data;
  });
}

Drives.prototype.extendRawCompiler = function (compiler) {
  this.extendDataCompiler(compiler, {
    compilerType: 'raw'
  });
}

Drives.prototype.extendBasicCompiler = function (compiler) {
  this.extendDataCompiler(compiler, {
    compilerType: 'basic'
  });
}

Drives.prototype.extendPagesCompiler = function (compiler) {
  //Before handlebars compiling
  compiler.registerPrecompileStartingStep((content, name, config, done) => {
    content = content.split('alignments_list').join('drives_list');
    content = content.split('alignment').join('drive');
    content = content.split('Alignment').join('Drive');
    console.log(name.magenta, content.substr(0, 100));
    console.log('num drives', content.split(/drive/i).length);
    done('Content: ' + content);
  });

  //After handlebars compiling
  compiler.registerStep((content, name, config, done) => {
    content = content += `
<!-- thanks for using dw-drives -->
    `
    done(content);
  });
}

module.exports = Drives;
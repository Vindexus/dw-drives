/**
 * This file compiles the JSON for this module. After the JSON is in a workable state, you likely won't need to run this anymore.
 * This file shouldn't be called by the ModularDungeonWorld project when it compiles this module into JSON for itself
 */

var path = require('path')
var config = {
  shortcuts: ['drives'], //Data in shortcuts is duplicated into game_data root. {{moves.hack_and_slash}} and {{hack_and_slash}} have the same data.
  gameDataDir: path.join(__dirname, "source"),
  outputFiles: [path.join(__dirname, "drives_data_raw.json")],
  debug: false,
  convertMd: false
}

var Parser = require('rpgparser-data')
var parser = new Parser()
parser.init(config);
parser.run();
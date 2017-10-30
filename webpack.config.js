const path = require('path');

module.exports = {
  entry: './app/assets/js/App.js',
  output: {
    path: path.join(__dirname, './app/temp/js'),
    filename: 'App.js'
  }
};

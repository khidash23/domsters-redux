const path = require('path');

module.exports = {
  entry: {
    App: './app/assets/js/App.js',
    Vendor: './app/assets/js/Vendor.js'
  },
  output: {
    path: path.join(__dirname, './app/temp/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, "dll"),
    filename: 'dll.[name].js',
    library: "[name]_[hash]",
		// 这个比较重要
    //libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, 'dll/manifest.json'),
    })
  ]
}
const path = require('path');
require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './dev/js/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    extensions: ['json', '.js', '.jsx', 'css']
  },
  module: {
    // rules: [{
    //   test: /\.jsx?$/,
    //   exclude: /node_modules/,
    //   loader: 'babel-loader'
    // }]
    rules: [
             {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
             },

             {
               test: /\.css$/,
               loader: 'style-loader!css-loader'
             }
           ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

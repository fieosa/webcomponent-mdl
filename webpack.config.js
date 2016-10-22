const webpack = require('webpack');

module.exports = {
  target: "web",
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'webcomponent-mdl.min.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015'],
          plugins: [
            ['transform-react-jsx', {
              pragma: 'jsxdom'
            }]
          ]
        }
      },
    ],
  },
  plugins: [

    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comment: {
        comments: false,
      }
    })

  ]
};

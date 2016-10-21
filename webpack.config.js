const webpack = require('webpack');

module.exports = function (DEBUG) {
  return {
    target: "web",
    entry: [
      './src/index.js'
    ],
    output: {
      // path: DEBUG ? 'test/' : 'dist/',
      filename: DEBUG ? 'webcomponent-mdl.js' : 'webcomponent-mdl.min.js',
    },
    devServer:{
      contentBase: 'docs/',
      devtool: 'eval',
      port: 5000,
    },
    devtool: DEBUG ? 'source-map' : false,
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

      ...DEBUG ? [] : [

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
          comment: {
            comments: false,
          }
        }),
      ],
    ],
  };
}

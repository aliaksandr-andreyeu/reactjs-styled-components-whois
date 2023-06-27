const path = require('path');
const copyPlugin = require('copy-webpack-plugin');
const esLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    host: 'localhost',
    hot: true,
    open: true,
    port: 8000,
    static: {
      directory: path.join(__dirname, 'build')
    }
  },
  entry: './src/index.tsx',
  output: {
    filename: './js/script.js',
    path: path.join(__dirname, 'build')
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new copyPlugin({
      patterns: [{ from: 'public' }]
    }),
    new esLintPlugin({
      fix: true
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};

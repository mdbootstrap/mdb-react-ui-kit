'use strict';
const path = require('path');
const webpack = require('webpack');

const libraryName = 'mdbreact';

module.exports = function (env) {
  let outputFile;
  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ];

  if (env === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin(
      {
        minimize: true,
        compress: {
          warnings: false
        },
        mangle: true
      }
    ));
    outputFile = libraryName.toLowerCase() + '.min.js';
  } else {
    outputFile = libraryName.toLowerCase() + '.js';
  }

  const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: [__dirname + '/src/index.js'],
    output: {
      path: __dirname + '/dist',
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      },
      {
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
      },
      {
        'prop-types': {
          root: 'PropTypes',
          commonjs2: 'prop-types',
          commonjs: 'prop-types',
          amd: 'prop-types',
        }
      }
    ],
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        { test: /\.(jsx)$/, use: 'babel-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader']},
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000', query: { outputPath: 'font/', publicPath: '../font/' }},
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream', query: { outputPath: 'font/', publicPath: '../font/' }},
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/png' }
      ]
    },
    resolve: {
      alias: {
        mdbreact: 'src/index'
      },
      extensions: ['.js', '.json']
    },
    plugins: plugins
  };

  return config;
};

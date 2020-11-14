const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserPlugin()
    ],
  }
});
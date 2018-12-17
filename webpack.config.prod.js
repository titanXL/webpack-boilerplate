const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  }
})

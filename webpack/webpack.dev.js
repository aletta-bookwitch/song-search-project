const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const dev = {
  devServer: {
    static: {
      directory: path.join(__dirname, '../src'),
    },
    compress: true,
    port: 3000,
  },
};

module.exports = merge(common, dev, {
  mode: 'development',
});

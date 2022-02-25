const { merge } = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const prod = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};

module.exports = merge(common, prod, {
  mode: 'production',
});

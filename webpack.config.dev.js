const path = require('path');
const webpackMerge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = webpackMerge.merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        port: 3000,
        hotOnly: true,
        https: true,
        open: true
    }
});

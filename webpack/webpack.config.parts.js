const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.less = new ExtractTextPlugin({
    filename: 'style.css',
});

exports.envVar = env => ({
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
    ],
});

exports.styleLoader = options => ({
    module: {
        rules: [
            {
                test: /\.less$/,
                use: options.use,
            },
        ],
    },
});

exports.sourceMaps = method => ({
    devtool: method,
});

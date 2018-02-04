const { PATHS } = require('./start');
const merge = require('webpack-merge');
const parts = require('./webpack.config.parts');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const production = merge(
    {
        entry: PATHS.APP,
        plugins: [
            parts.less,
            new HtmlWebpackPlugin({
                template: PATHS.TEMPLATE,
                inject: 'body',
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                },
                output: {
                    comments: false,
                },
            }),
        ],
    },
    parts.envVar('production'),
    parts.sourceMaps('source-map'),
    parts.styleLoader({
        use: parts.less.extract({
            use: [
                {
                    loader: 'css-loader',
                    options: { minimize: true },
                },
                {
                    loader: 'less-loader',
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: PATHS.POSTCSS,
                        },
                    },
                },
            ],
            fallback: 'style-loader',
        }),
    }),
);
module.exports = production;

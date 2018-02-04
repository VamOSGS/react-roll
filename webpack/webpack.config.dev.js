const merge = require('webpack-merge');
const { PATHS, PORT } = require('./start');
const parts = require('./webpack.config.parts');
const webpack = require('webpack');

const development = merge(
    {
        entry: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${PORT}`,
            'webpack/hot/only-dev-server',
            PATHS.APP,
        ],
        plugins: [new webpack.NamedModulesPlugin()],
        devServer: {
            stats: 'errors-only',
            port: PORT,
            hot: true,
            compress: true,
            inline: true,
            overlay: {
                errors: true,
                warnings: true,
            },
            contentBase: PATHS.DIST,
        },
    },
    parts.envVar('development'),
    parts.sourceMaps('source-map'),
    parts.styleLoader({
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
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
    }),
);

module.exports = development;

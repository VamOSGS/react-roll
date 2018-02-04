const merge = require('webpack-merge');
const production = require('./webpack.config.prod');
const development = require('./webpack.config.dev');
const { PATHS } = require('./start');

const common = {
    output: {
        path: PATHS.DIST,
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules', PATHS.SRC],
        extensions: ['.js', '.jsx', '.json', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
module.exports = (env) => {
    const config = merge(common, env === 'production' ? production : development);
    return config;
};

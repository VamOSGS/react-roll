const path = require('path');

exports.PATHS = {
    SRC: path.resolve('src'),
    DIST: path.resolve('dist'),
    APP: path.resolve('src/js/index'),
    TEMPLATE: path.resolve('webpack/template.html'),
    POSTCSS: path.resolve('postCSS.config.js'),
};

exports.PORT = 1337;

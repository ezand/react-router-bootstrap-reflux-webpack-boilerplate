var path = require('path');
var merge = require('./config/merge');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname, '.');

var common = {
    entry: [
        path.join(ROOT_PATH, 'src/routes.jsx'),
        'bootstrap-sass!./bootstrap-sass.config.js'
    ],
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"},
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Eximo :: Release Management',
            template: 'assets/index_template.html'
        })
    ]
};

var mergeConfig = merge.bind(null, common);

if (TARGET === 'build') {
    module.exports = mergeConfig({
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    include: path.join(ROOT_PATH, 'src'),
                    loaders: ['babel-loader']
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
            new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
        ]
    });
}

if (TARGET === 'dev') {
    module.exports = mergeConfig({
        devtool: 'source-map',
        entry: ['webpack/hot/dev-server'],
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel'],
                    include: path.join(ROOT_PATH, 'src')
                }
            ],
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'eslint-loader',
                    include: path.join(ROOT_PATH, 'src')
                },
                {
                    test: /\.jsx?$/,
                    loaders: ['eslint', 'jscs'],
                    include: path.join(ROOT_PATH, 'src')
                }
            ]
        },
        plugins: [
            // do not reload if there is a syntax error in your code
            new webpack.NoErrorsPlugin()
        ]
    });
}

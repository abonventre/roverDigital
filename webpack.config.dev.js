var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client\\public');
var APP_DIR = path.resolve(__dirname, 'client');

console.log(APP_DIR + '\\index.jsx');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client',
            'webpack/hot/only-dev-server',
            APP_DIR + '\\index.jsx',
        ],
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    // resolve: {
    //     extensions: ['.js', '.jsx'],
    //     modules: [
    //         'client',
    //         'node_modules',
    //     ],
    // },

    module: {
        loaders: [
            {
              test : /\.jsx?/,
              include : APP_DIR,
              loader : 'babel-loader'
            }, {
                test: /\.(jpe?g|gif|png|svg)$/i,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.js',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT: JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development'),
            }
        }),
    ],
};

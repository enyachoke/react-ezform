var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    externals: {
        "react" : "React",
        "react-dom": "ReactDOM",
        "react-bootstrap" : "ReactBootstrap"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: 'node_modules',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
        { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
        { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimety=application/font-woff"},
        { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader:"file-loader?name=[name].[ext]"}
      ]
    }
};

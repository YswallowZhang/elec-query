var webpack = require('webpack');

module.exports = {
    entry:{
        index: __dirname + "/app/index.jsx",
        detail: __dirname + "/app/detail.jsx",
        past: __dirname + "/app/past.jsx",
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
        publicPath: "./",
    },

    module: {
        loaders: [
            {
                test:/\.json$/,
                loader: "json"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css!less'
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192&name=./images/[name].[ext]'
            }
        ]
    }
}


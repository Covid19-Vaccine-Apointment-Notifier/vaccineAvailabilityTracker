const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/client/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: {
        main:["./src/client/index.js"]
    },
    // devtool: 'inline-source-map',
    devServer: {
        port: "3001",
        contentBase: 'public',
        overlay : true,
        hot: true,
        stats: {
            colors: true
        }
    },
    output: { // NEW
        path: path.join(__dirname, 'public'),
        filename: "[name]-bundle.js",
        publicPath: '/'
    }, // NEW Ends
    plugins: [htmlPlugin,new webpack.HotModuleReplacementPlugin()],
    mode: "development",
    target: 'web',
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: { name: '/static/[name].[ext]' }
            }
        ]
    }
};

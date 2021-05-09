const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  favicon: './src/client/assets/favicon.ico',
  filename: "./index.html",
});

module.exports = {
    mode:"development",
    entry: [
      "@babel/polyfill", // enables async-await
      "./src/client/index.js",
    ],
    devServer: {
      // lazy: true,
      // compress: true,
      historyApiFallback: true,
      hot: true,

      contentBase: "public",
      contentBase: path.join(__dirname, "/public"), // serve your static files from here
      watchContentBase: true, // initiate a page refresh if static content changes
      proxy: [
        // allows redirect of requests to webpack-dev-server to another destination
        {
          context: ["/api", "/auth", "/graphql"], // can have multiple
          target: "http://localhost:3000", // server and port to redirect to
          secure: false,
        },
      ],
      port: 3001, // port webpack-dev-server listens to, defaults to 8080
      overlay: {
        // Shows a full-screen overlay in the browser when there are compiler errors or warnings
        warnings: false, // defaults to false
        errors: true, // defaults to false
      },
    },
    target: "web",
    output: {
      // NEW
      path: path.join(__dirname, "/public"),
      filename: "[name].js", // relative to the outputPath (defaults to / or root of the site)
      publicPath: '/'
    }, // NEW Ends
    devtool: "source-map",
    plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            // options: {
              // plugins: ["react-hot-loader/babel"],
            // },
          },
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    }
  }

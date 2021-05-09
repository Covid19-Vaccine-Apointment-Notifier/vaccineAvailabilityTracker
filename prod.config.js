const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  favicon: './src/client/assets/favicon.ico',
  filename: "./index.html",
});

module.exports = [
  {
    mode: "production",
    entry: [
      "@babel/polyfill", // enables async-await
      "./src/client/index.js",
    ],
    output: {
      // NEW
      path: path.join(__dirname, "/public"),
      filename: "bundle.js", // relative to the outputPath (defaults to / or root of the site)
      publicPath: '/'
    }, // NEW Ends
    devtool: "source-map",
    plugins: [htmlPlugin],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
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
  },
  {
    mode: "production",
    entry: [
      "@babel/polyfill", // enables async-await
      "./src/server/server.js",
    ],
    output: {
      path: path.join(__dirname, "public"),
      publicPath: "/",
      filename: "server.js",
    },
    target: "node",
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false, // if you don't put this is, __dirname
      __filename: false, // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          // Loads the javacript into html template provided.
          // Entry point is set below in HtmlWebPackPlugin in Plugins
          test: /\.html$/,
          use: [{ loader: "html-loader" }],
        },
      ],
    },
    // plugins: [
    //   new HtmlWebPackPlugin({
    //     template: "./src/client/index.html",
    //     filename: "./index.html",
    //   })
    // ]
  },
];

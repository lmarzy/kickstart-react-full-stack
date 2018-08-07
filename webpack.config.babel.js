import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

const cleanWebpackPlugin = new CleanWebpackPlugin(["dist"]);
const hotModuleReplacement = new webpack.HotModuleReplacementPlugin();

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  minify: {
    collapseWhitespace: true
  }
});

module.exports = {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "tslint-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js?$/,
        enforce: "pre",
        loader: "source-map-loader"
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    cleanWebpackPlugin,
    hotModuleReplacement,
    htmlWebPackPlugin,
    cleanWebpackPlugin
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};

const webpack = require('webpack');

module.exports = (env) => {
  const isProduction = env === 'production';

  console.log('env', env);
  return {
    entry: ["react-hot-loader/patch", "./src/index.js"],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: isProduction ? 'source-map' : "cheap-module-eval-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: "./dist",
      hot: true
    },
  };
};

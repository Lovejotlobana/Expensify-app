const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
entry: './src/app.js',
  (module.exports = {
    entry: './src/app.js',
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     title: 'Production',
    //     template: './src/index.html',
    //   }),
    // ],
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  });

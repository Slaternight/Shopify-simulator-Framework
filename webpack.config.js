const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    js: './src/app.js',
    css: './src/sass/main.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader' // Compilador de sass para el archvo css
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme.css',
    }),
  ],
  mode: 'development',
};
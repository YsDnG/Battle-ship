const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/battleship.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "asset/resource",
        dependency: { not: ['url'] },
         
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  devtool:'source-map'


};
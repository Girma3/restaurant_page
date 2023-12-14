const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
  entry: {
    index:'./src/index.js',
    // intro:'./src/intro_page.js',
    // menu:'./src/menu.js',
    // contact:'./src/contact.js'
   },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      body: '<div id=content></div>',
      title: 'G-vibe',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
       
      },
      {
        test:/\.(woff|woff2)$/i,
        type: 'asset/resource',
      }
    ],
    
  },
 
};

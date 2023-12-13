const path = require('path');

module.exports = {
    mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
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

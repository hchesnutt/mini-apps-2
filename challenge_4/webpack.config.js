const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, './client/index.jsx')
  ],
  output: {
    path: path.join(__dirname + '/public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};

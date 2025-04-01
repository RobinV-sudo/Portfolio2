const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Ensure babel-loader is installed if using ES6+
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production', // Change to 'development' for development builds
};

const path = require('path');

module.exports = {
  mode: 'development', // Set mode to development
  devtool: 'inline-source-map', // Enable source maps for easier debugging
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve content from the dist directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port for the dev server
    hot: true, // Enable hot module replacement
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
        },
      },
      {
        test: /\.scss$/, // Process SCSS files
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },
};

const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: './client/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        //m: distingushes between commonJS and ES6 module files, Node.js
        //jsx files or js files
        // test: /\.m?js$/,
        test: /\.(jsx|m?js)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //babel preset env for compiling modern Javascript down to ES5
            //babel preset react for compiling JSX and other stuff down to Javascript
            //react uses es6, so don't need @babel/preset-env
            //what's diff between presets: ['react', 'es2015']
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  }
};
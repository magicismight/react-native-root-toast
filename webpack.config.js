var path = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  context: __dirname,
  externals: {
    "react": "react",
    "react-native": "react-native"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
}

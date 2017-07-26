const webpack = require('webpack')
const path = require('path')

const nodeModulesPath = path.resolve(__dirname, 'node_modules')

const entry = [
  path.join(__dirname, '/public/app.jsx')
]
const output = {
  path: path.resolve(__dirname, 'build'),
  publicPath: 'build/',
  filename: 'app.js'
}

const config = {
  entry: entry,
  resolve: {
    modules: [
      path.join(__dirname, 'public'),
      nodeModulesPath
    ],
    extensions: ['.js', '.jsx']
  },
  output: output,
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
    // Minify the bundle
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     //supresses warnings, usually from module minification
    //     warnings: false
    //   }
    // }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.jsx?$/, // All .js and .jsx files
        use: ['jsx-loader?harmony', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: [nodeModulesPath]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  externals: [],
  // set __filename and __dirname to true to make node-notifier work
  node: {
    __filename: true,
    __dirname: true
  }
}

module.exports = config

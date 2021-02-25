const path = require('path')
const VueLoader = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ThemeWebpackPlugin = require('@ices/theme-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = ({ syntax = 'css' }, { mode, hot }) => ({
  plugins: [
    new ThemeWebpackPlugin({
      themes: [`src/use-${syntax}/themes/*.${syntax}`],
      defaultTheme: 'dark',
      outputPath: 'css/themes'
    }),
    mode === 'production' &&
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
    new VueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      templateContent: `
        <html lang='en'>
          <head>
            <title>Examples: use ${syntax}</title>
          </head>
          <body>
            <div id="react-app"></div>
            <div id="vue-app"></div>
          </body>
        </html>`,
      filename: 'index.html',
      favicon: false
    }),
    new CleanWebpackPlugin()
  ].filter(Boolean),
  devtool: mode === 'development' && 'source-map',
  target: 'web',
  module: {
    rules: [
      ...getStyleLoaders(['scss', 'sass', 'less', 'css'], mode),
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          mimetype: 'image/png',
          limit: 10000,
          name: 'img/[name].[contenthash:8].[ext]'
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  entry: [`./src/use-${syntax}/index.tsx`],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `js/[name].[${hot ? 'fullhash:8' : 'contenthash:8'}].js`,
    pathinfo: mode === 'development',
    publicPath: './'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      vue$: require.resolve('vue/dist/vue.esm.js')
    }
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})

function getStyleLoaders(syntaxList, mode) {
  return syntaxList
    .map((syntax) => {
      const preprocess = syntax !== 'css'
      return ['include', 'exclude'].map((condition) => ({
        test: new RegExp(String.raw`\.${syntax}$`),
        [condition]: new RegExp(String.raw`\.module\.${syntax}$`),
        use: [
          mode === 'development'
            ? 'vue-style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: mode === 'production' ? { publicPath: '../' } : {}
              },
          {
            loader: `css-loader`,
            options: {
              esModule: false,
              importLoaders: preprocess ? 2 : 1,
              modules:
                condition === 'include'
                  ? { localIdentName: '[hash:base64:8]' }
                  : false
            }
          },
          'postcss-loader',
          preprocess && `${/^s[ac]ss$/.test(syntax) ? 'sass' : syntax}-loader`
        ].filter(Boolean)
      }))
    })
    .reduce((rules, syntaxRules) => [...rules, ...syntaxRules], [])
}

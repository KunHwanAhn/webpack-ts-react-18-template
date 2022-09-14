const { resolve } = require('path');

const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const MODE_DEVELOPMENT = 'development';

module.exports = {
  mode: MODE_DEVELOPMENT,
  target: ['web', 'es2015'],
  entry: resolve(__dirname, './src/main.tsx'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_props: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            typeofs: false,
          },
          mangle: {
            safari10: true,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new CaseSensitivePathsPlugin(),
    new HotModuleReplacementPlugin({}),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(MODE_DEVELOPMENT),
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'assets', to: '' }],
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },

      // addition - add source-map support
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
    static: [
      {
        directory: resolve(__dirname, './assets'),
      },
    ],
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
};

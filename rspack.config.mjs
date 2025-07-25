import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { rspack } from '@rspack/core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error('Unknown bundler');
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: 'production',
  devtool: false,
  entry: {
    main: './src/index',
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, 'webpack-dist')
      : path.resolve(__dirname, 'rspack-dist'),
    // use .bundle extension instead of .js
    filename: '[name].bundle',
    chunkFilename: '[name].bundle',
    cssFilename: '[name].css',
    cssChunkFilename: '[name].css',
  },
  experiments: {
    css: true,
  },
  optimization: {
    minimizer: [
      // configure minmiezr to pick up .bundle extension
      isRunningRspack &&
        new rspack.SwcJsMinimizerRspackPlugin({
          test: /\.bundle$/,
        }),
    ],
  },
};

export default config;

import { defineConfig } from '@rsbuild/core';
import { SwcJsMinimizerRspackPlugin } from '@rspack/core';

export default defineConfig({
  output: {
    distPath: {
      root: './rsbuild-dist',
      js: '[name].bundle',
    },
    filename: {
      js: '[name].bundle',
    },
  },
  tools: {
    bundlerChain(chain, { CHAIN_ID }) {
      chain.optimization
        .minimizer(CHAIN_ID.MINIMIZER.JS)
        .use(SwcJsMinimizerRspackPlugin, [
          {
            test: /\.bundle$/,
          },
        ]);
    },
  },
});

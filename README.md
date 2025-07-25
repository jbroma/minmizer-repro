# minimizer-repro

## Usage

1. Run `pnpm run build:rspack`
2. Observe `./rspack-dist/main.js` not minified

## Outputs

Output are in `./outputs`

- `./outputs/bundle-extension` is the output of `pnpm run build:rspack` with `.bundle` extension in the config
- `./outputs/js-extension` is the output of `pnpm run build:webpack` with `.js` extension in the config

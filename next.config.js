/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/assets/svg'),
  sassOptions: {
    includePaths: [path.join(__dirname, 'app/styles')],
  },
  //TODO: https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': {
        page: '/',
      },
    };
  },
});

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@hooks': path.resolve(__dirname, 'src/hooks')
      }
    }
  });
}
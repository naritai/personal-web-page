const path = require('path');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // if (stage.startsWith('develop')) {
  //   actions.setWebpackConfig({
  //     resolve: {
  //         alias: {"react-dom": "@hot-loader/react-dom"},
  //     },
  //   })
  // }

  // удалить "@hot-loader/react-dom

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@fonts': path.resolve(__dirname, 'src/fonts')
      }
    }
  });
}
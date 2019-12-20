exports.onCreateWebpackConfig = ({actions, stage}) => {
  if (stage === "build-html") {
      actions.setWebpackConfig({
          module: {
              rules: [
                  {
                      test: /imagenation/,
                      use: ['null-loader']
                  },
              ],
          }
      })
  }
};
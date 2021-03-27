exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /offending-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
}  
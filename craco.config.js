const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

module.exports = {
  webpack: {
    plugins: [
      new DllReferencePlugin({
        context: __dirname,
        manifest: require("./dll/manifest.json") // eslint-disable-line
      })
    ]
  }
}
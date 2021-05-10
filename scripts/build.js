const fs = require("fs-extra");
const webpack = require("webpack");
const webpackConfig = require("../webpack.dll.config.js");

webpack(webpackConfig, (err, stats) => {
  // Stats Object
  if (err || stats.hasErrors()) {
    // Handle errors here
    console.log(err);
  }
  // Done processing

  // 复制到public，没有用cp命令为了支持windows
  fs.copy("dll/dll.vendor.js", "public/dll.vendor.js")
    .then(() => console.log("success!"))
    .catch(err => console.error(err))
  
});

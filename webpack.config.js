const path = require("path");

module.exports = {
  entry: "./sdk/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};

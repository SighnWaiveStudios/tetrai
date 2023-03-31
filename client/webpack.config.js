const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: "inline-source-map",
  entry: "./index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public/js"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

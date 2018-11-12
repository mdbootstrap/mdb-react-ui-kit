const webpack = require("webpack");

const libraryName = "mdbreact";

module.exports = function (env) {
  let outputFile;
  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ];

  if (env === "production") {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        },
        mangle: true
      })
    );
    outputFile = libraryName.toLowerCase() + ".min.js";
  } else {
    outputFile = libraryName.toLowerCase() + ".js";
  }

  const config = {
    mode: "production",
    devtool: "source-map",
    entry: [__dirname + "/src/index.js"],
    output: {
      path: __dirname + "/dist",
      filename: outputFile,
      library: libraryName,
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    externals: [
      {
        react: {
          root: "React",
          commonjs2: "react",
          commonjs: "react",
          amd: "react"
        }
      },
      {
        "react-dom": {
          root: "ReactDOM",
          commonjs2: "react-dom",
          commonjs: "react-dom",
          amd: "react-dom"
        }
      },
      {
        "@date-io/moment": {
          root: "@date-io/moment",
          commonjs2: "@date-io/moment",
          commonjs: "@date-io/moment",
          amd: "@date-io/moment"
        }
      },
      {
        "prop-types": {
          root: "PropTypes",
          commonjs2: "prop-types",
          commonjs: "prop-types",
          amd: "prop-types"
        }
      },
      {
        "bootstrap-css-only": {
          commonjs2: "bootstrap-css-only",
          commonjs: "bootstrap-css-only",
          amd: "bootstrap-css-only"
        }
      },
      {
        "font-awesome": {
          commonjs2: "font-awesome",
          commonjs: "font-awesome",
          amd: "font-awesome"
        }
      },
      {
        "react-transition-group": {
          root: "reactTransitionGroup",
          commonjs2: "react-transition-group",
          commonjs: "react-transition-group",
          amd: "react-transition-group"
        }
      },
      {
        classnames: {
          root: "classnames",
          commonjs2: "classnames",
          commonjs: "classnames",
          amd: "classnames"
        }
      },
      {
        "@material-ui/core": {
          root: "@material-ui/core",
          commonjs2: "@material-ui/core",
          commonjs: "@material-ui/core",
          amd: "@material-ui/core"
        }
      },
      {
        "material-ui-pickers": {
          root: "material-ui-pickers",
          commonjs2: "material-ui-pickers",
          commonjs: "material-ui-pickers",
          amd: "material-ui-pickers"
        }
      },
      {
        moment: {
          root: "moment",
          commonjs2: "moment",
          commonjs: "moment",
          amd: "moment"
        }
      },
      {
        outy: {
          root: "outy",
          commonjs2: "outy",
          commonjs: "outy",
          amd: "outy"
        }
      },
      {
        "perfect-scrollbar": {
          root: "perfect-scrollbar",
          commonjs2: "perfect-scrollbar",
          commonjs: "perfect-scrollbar",
          amd: "perfect-scrollbar"
        }
      },
      {
        raf: {
          root: "raf",
          commonjs2: "raf",
          commonjs: "raf",
          amd: "raf"
        }
      },
      {
        "react-autosuggest": {
          root: "react-autosuggest",
          commonjs2: "react-autosuggest",
          commonjs: "react-autosuggest",
          amd: "react-autosuggest"
        }
      },
      {
        "react-numeric-input": {
          root: "react-numeric-input",
          commonjs2: "react-numeric-input",
          commonjs: "react-numeric-input",
          amd: "react-numeric-input"
        }
      },
      {
        "react-numeric-input": {
          root: "react-numeric-input",
          commonjs2: "react-numeric-input",
          commonjs: "react-numeric-input",
          amd: "react-numeric-input"
        }
      },
      {
        "react-toastify": {
          root: "react-toastify",
          commonjs2: "react-toastify",
          commonjs: "react-toastify",
          amd: "react-toastify"
        }
      },
      {
        "react-router-dom": {
          root: "react-router-dom",
          commonjs2: "react-router-dom",
          commonjs: "react-router-dom",
          amd: "react-router-dom"
        }
      },
      {
        "react-popper": {
          root: "react-popper",
          commonjs2: "react-popper",
          commonjs: "react-popper",
          amd: "react-popper"
        }
      },
      {
        "salad-ui.chart": {
          root: "salad-ui.chart",
          commonjs2: "salad-ui.chart",
          commonjs: "salad-ui.chart",
          amd: "salad-ui.chart"
        }
      },
      {
        "chart.js": {
          root: "chart.js",
          commonjs2: "chart.js",
          commonjs: "chart.js",
          amd: "chart.js"
        }
      },
      {
        "react-chartjs-2": {
          root: "react-chartjs-2",
          commonjs2: "react-chartjs-2",
          commonjs: "react-chartjs-2",
          amd: "react-chartjs-2"
        }
      },
      {
        "react-image-lightbox": {
          root: "react-image-lightbox",
          commonjs2: "react-image-lightbox",
          commonjs: "react-image-lightbox",
          amd: "react-image-lightbox"
        }
      }
    ],
    module: {
      rules: [
        { test: /\.(js)$/, use: "babel-loader" },
        { test: /\.(jsx)$/, use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
        {
          test: /\.(woff|woff2)$/,
          loader: "url-loader?prefix=font/&limit=5000",
          query: { outputPath: "font/", publicPath: "../font/" }
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=application/octet-stream",
          query: { outputPath: "font/", publicPath: "../font/" }
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&mimetype=image/png"
        }
      ]
    },
    resolve: {
      alias: {
        mdbreact: "src/index"
      },
      extensions: [".js", ".json"]
    },
    plugins: plugins
  };

  return config;
};





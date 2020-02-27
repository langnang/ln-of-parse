<h1>webpack4.x</h1>

# 什么是 Webpack

WebPack 可以看做是模块打包机：它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript 等），并将其打包为合适的格式以供浏览器使用。

# Webpack 核心概念

1. Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
2. Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
3. Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
4. Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
5. Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
6. Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。

# Webpack 执行流程

webpack 启动后会在 entry 里配置的 module 开始递归解析 entry 所依赖的所有 module，每找到一个 module, 就会根据配置的 loader 去找相应的转换规则，对 module 进行转换后在解析当前 module 所依赖的 module，这些模块会以 entry 为分组，一个 entry 和所有相依赖的 module 也就是一个 chunk，最后 webpack 会把所有 chunk 转换成文件输出，在整个流程中 webpack 会在恰当的时机执行 plugin 的逻辑

# 实例配置

## 配置 Webpack

```js
npm i webpack webpack-cli -D
```

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./asset/js/index.js", // 入口文件
  output: {
    path: path.join(__dirname, "dist/js"), // 出口目录
    filename: "[name].[hash].js" // 文件名称
  },
  module: {},
  plugins: {},
  devServer: {}
};
```

## 配置开发服务器

## 支持 ES6

```js
npm i babel-loader babel-core babel-preset-env -D
```

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: "babel-loader",
        query: {
          presets: ["env"]
        }
      }
    }
  ];
}
```

## 压缩 JS

```js
npm i uglifyjs-webpack-plugin -D
```

```js
// 第一种方式：修改为生产模式
mode: "production";
```

```js
// 第二种方式：使用插件--文件较小
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
plugins: [new UglifyjsWebpackPlugin()];
```

## 支持 CSS、Sass、Less

```js
```

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.join(__dirname, "asset"),
      exclude: /node_module/
    }
  ];
}
```

## CSS 压缩

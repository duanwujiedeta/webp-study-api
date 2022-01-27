### Info

输出你的系统信息。

```bash
npx webpack info [options]
```

**示例**

```bash
npx webpack info --output json --addition-package postcss
npx webpack info
```

### Configtest

校验 webpack 配置。

```bash
npx webpack configtest [config-path]
```

**示例**

```bash
npx webpack configtest ./webpack.config.js
```

### Serve

运行 webpack 开发服务器。需要配置好配置文件中的  webpack-dev-server

```bash
npx webpack serve [options]
```

**示例**

```bash
npx webpack serve --static --open
```

### Watch

运行 webpack 并且监听文件变化。没有运行 server 服务器

```bash
npx webpack watch [options]
```

**示例**

```bash
npx webpack watch --mode development
```

## Flags

默认情况下，webpack 提供了以下 flag：

| Flag / 别名             | 类型            | 描述                                                         |
| :---------------------- | :-------------- | :----------------------------------------------------------- |
| `--entry`               | string[]        | 应用程序的入口文件，例如 `./src/main.js`                     |
| `--config, -c`          | string[]        | 提供 webpack 配置文件的路径，例如 `./webpack.config.js`      |
| `--config-name`         | string[]        | 要使用的配置名                                               |
| `--name`                | string          | 配置名称，在加载多个配置时使用                               |
| `--color`               | boolean         | 启用控制台颜色                                               |
| `--merge, -m`           | boolean         | 使用 webpack-merge 合并两个配置文件，例如 `-c ./webpack.config.js -c ./webpack.test.config.js` |
| `--env`                 | string[]        | 当它是一个函数时，传递给配置的环境变量                       |
| `--progress`            | boolean, string | 在构建过程中打印编译进度                                     |
| `--output-path, -o`     | string          | webpack 生成文件的输出位置，例如 `./dist`                    |
| `--target, -t`          | string[]        | 设置要构建的 target                                          |
| `--watch, -w`           | boolean         | 监听文件变化                                                 |
| `--watch-options-stdin` | boolean         | stdin stream 结束时，停止监听                                |
| `--hot, -h`             | boolean         | 启用 HMR                                                     |
| `--devtool, -d`         | string          | 控制是否生成 source map，以及如何生成                        |
| `--prefetch`            | string          | 预先发生请求                                                 |
| `--json, -j`            | boolean, string | 将结果打印成 JSON 格式或存储在文件中                         |
| `--mode`                | string          | 定义 webpack 所需的 mode                                     |
| `--version, -v`         | boolean         | 获取当前 cli 版本                                            |
| `--stats`               | boolean, string | 它告诉 webpack 如何处理 stats                                |
| `--analyze`             | boolean         | 它调用 `webpack-bundle-analyzer` 插件来获取 bundle 信息      |

### 不使用配置文件

```bash
npx webpack --entry <entry> --output-path <output-path>
```

**example**

```bash
npx webpack --entry ./first.js --entry ./second.js --output-path /build
#上面有两个 entry 文件
npx webpack --entry ./first-entry.js
npx webpack ./first-entry.js ./other-entry.js
npx webpack --entry ./first-entry.js ./other-entry.js
```

### version

**显示已安装的 package 以及子 package 的版本**。

```bash
npx webpack --version
# or
npx webpack version
```

## 分析 Bundle

你可以使用 `webpack-bundle-analyzer` 插件来分析你 webpack 输出的 bundle。你还可以通过 CLI 的 `--analyze` flag 调用它

```bash
npx webpack --analyze
```


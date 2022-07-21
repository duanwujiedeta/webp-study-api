# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application



`file-loader`：会把`import`的文件转化为输出后的路径，输出后的文件也设置了相应的输出路径,比较完整的示例看配置文件

`url-loader`：和`file-loader`配置等基本差不多，多了一个`limit`选项，可以用来控制文件是否转为`base64`，详见配置
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


`css-loader`的一些说明：在使用`css-loader`之前，需要先把静态资源通过 `asset` 或者 `url-loader` `file-loader` 先进行转化，最后才由`css-loader`进行输出处理

`css-loader`，通过 debug 调试得知：它转化后的就是一个 js 类，蕴含的方法用来处理 `css`的样式问题，输出的代码可以通过自定义的`loader`来进行拦截了解到。
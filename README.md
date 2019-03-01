# story

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
 1.axios官方文档(axios的使用方法)
 创建vue项目的命令：vue init  webpack +项目名称

 超出一行，用省略号表示
 给父元素display:flex
  flex-wrap: wrap;
  给子元素：
   overflow: hidden;
      white-space: nowrap;不换行
      text-overflow: ellipsis; 省略号表示
1.使用slice对数组进行范围处理时，被处理对象必须为数组。
能进行范围处理输出也为数组，但是还报错。原因第一次遍历未发现数组，而第二次发现数组进而遍历出了。
解决办法：v-if Array.isArray(data) 跳过第一次遍历。

devDependencies 缩写（—D）开发环境
dependencies  生产环境 缩写（-S）
该项目为个人项目，由个人独立完成。
vue-lazyload (懒加载)

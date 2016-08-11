# 逗哥的博客教学

## 前言

这里是[逗哥个人主页](http://cathayandy.com:3000)的repo! 以及一个简单的博客搭建的教学.

## 第一章 前期准备

一个博客系统是由前端后端和数据库组成的, 所以在这一章里, 我介绍一下如何配置前端后端以及数据库.

#### 第1节 后端`koa.js`

后端我选择的是[`koa.js`](http://koajs.com/). 我选择`koa.js`的原因是它比较轻量, 并且使用了[`generator`](https://en.wikipedia.org/wiki/Generator_(computer_programming))模式, 使得其开发避免了繁琐的回调嵌套. 为了运行`koa.js`, 需要先装一个`js`的运行环境[`node.js`](https://nodejs.org/).

* 安装`node.js`
    
    * 先装`node.js`的版本管理工具[`nvm`](https://github.com/creationix/nvm):
        
            curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
    
    * 然后利用`nvm`安装`node.js`: `nvm install v4.2.4`.
    * 运行`node -v`, 输出`v4.2.4`即说明安装成功.

* 利用`node.js`新建一个工程

    * 新建一个文件夹来存你的工程: `mkdir blog`.
    * 进入到这个文件夹: `cd blog`.
    * 使用`npm init`初始化一个`node.js`工程, 把入口文件设为`app.js`, 剩下那些选项看着填就好啦.
    * 看看生成了什么:
        
        * `LICENSE` - 这表示你新建的这个工程是在什么许可证下发布的.
        * `README.md` - 这是你工程的简介.
        * `package.json` - 这是最重要的一个文件, 你之前填的配置几乎都存在了这个文件里, 它就是你工程的配置文件.
    * 新建一个文件`app.js`, 这个文件就是你工程的入口文件啦.

* 安装`koa.js`并用它启动一个Web服务

    * 安装`koa.js`: `npm install koa --save`.
    * 编辑`index.js`.

        首先要引入`koa.js`.
    
            var koa = require('koa');
            
        然后例化一个`koa`的实例`app`.

            var app = koa();

        使用`app.use()`加载中间件.

            app.use(function *(){
              this.body = 'Hello World';
            });

        监听`3000`端口.

            app.listen(3000);

    * 运行上述代码, 启动Web服务: `node app.js`.
    * 打开浏览器, 在地址栏中输入`127.0.0.1:3000`, 看看你的成果啦!
    * 打开`package.json`, 在`"scripts"`加入一项`"start": "node app.js"`, 下次键入`npm start`就可以启动服务器啦.

#### 第2节 前端`vue.js`

* 安装`vue.js`
    
        npm install vue --save

* 安装`babel-runtime`
    
        npm install babel-runtime --save

* 安装和`koa`相关的热加载包
        
        npm install koa-static koa-webpack-dev-middleware koa-webpack-hot-middleware --save
    
* 安装`webpack`
    
        npm install webpack -g
        npm install webpack --save-dev

* 安装`babel`相关包
    
        npm install babel-core babel-loader babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-2 --save-dev
    
* 安装`cross-env`
        
        npm install cross-env --save-dev
    
* 安装相关`loader`
    
        npm install css-loader file-loader json-loader url-loader --save-dev

* 安装`vue`相关`loader`
    
        npm install vue-hot-reload-api vue-html-loader vue-loader vue-style-loader --save-dev
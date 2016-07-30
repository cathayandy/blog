# 逗哥的博客教学

## 前言

这里是逗哥个人主页的repo! 以及一个简单的博客搭建的教学.

## 第一章 前期准备

一个博客系统是由前端后端和数据库组成的, 所以在这一章里, 我介绍一下如何配置前端后端以及数据库.

#### 第1节 后端`koa.js`

后端我选择的是`koa.js`. 我选择`koa.js`的原因是它比较轻量, 并且使用了`generator`模式, 使得其开发避免了繁琐的回调嵌套. 为了运行`koa.js`, 需要先装一个`js`的运行环境`node.js`.

* 安装`node.js`
    
    * 先装`node.js`的版本管理工具`nvm - node version manager`:
        
            curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
    
    * 然后利用`nvm`安装`node.js`: `nvm install v4.2.4`.
    * 运行`node -v`, 输出`v4.2.4`即说明安装成功.

* 利用`node.js`新建一个工程

    * 新建一个文件夹来存你的工程: `mkdir blog`.
    * 进入到这个文件夹: `cd blog`.
    * 使用`npm init`初始化一个`node.js`工程, 那些选项看着填就好啦.
    * 新建一个文件`index.js`, 这个文件就是你工程的入口文件啦.

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

    * 运行上述代码, 启动Web服务: `node index.js`.
    * 打开浏览器, 在地址栏中输入`127.0.0.1:3000`, 看看你的成果啦!

#### 第2节 前端`vue.js`



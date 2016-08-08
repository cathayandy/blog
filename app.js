var koa = require('koa');
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var config = require('./webpack.config');
var serve = require('koa-static');

var app = koa();

// webpack compiler

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// response

app.use(serve('.'));

app.listen(3000);
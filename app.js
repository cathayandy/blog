const koa = require('koa');
const serve = require('koa-static');
const route = require('koa-route');
const logger = require('koa-logger');

const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const config = require('./webpack.config');

const blogs = require('./models/blogs.js');

const app = koa();

// logger
app.use(logger());

// webpack compiler
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// db
app.use(blogs.db);

// route
app.use(route.get('/blogs', blogs.listR));
app.use(route.post('/blogs', blogs.C));
app.use(route.get('/blogs/:id', blogs.R));
app.use(route.post('/blogs/:id', blogs.U));
app.use(route.put('/blogs/:id', blogs.U));
app.use(route.patch('/blogs/:id', blogs.partU));
app.use(route.del('/blogs/:id', blogs.D));

// static
app.use(serve('.'));

// response
app.listen(3000);
const parse = require('co-body');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var blogs;

function* db(next) {
  const db = yield MongoClient.connect('mongodb://localhost:27017/blog');
  blogs = db.collection('blogs');
  yield next;
  db.close();
}

function* C() {
  const blog = yield parse(this);
  blog._id = new ObjectID().toHexString();
  blog.create_at = new Date;
  yield blogs.insert(blog);
  console.log(`Create ${JSON.stringify(blog)}.`);
  this.body = blog;
}
function* R(_id) {
  const blog = yield blogs.findOne({ _id });
  if (blog) {
    console.log(`Read ${JSON.stringify(blog)}.`);
    this.body = blog;
  } else {
    console.log(`Read blog ${_id} failed.`);
    this.body = { err: 'No this blog.' };
  }
}
function* U(_id) {
  const newBlog = yield parse(this);
  const blog = yield blogs.findOneAndReplace({ _id }, newBlog);
  if (blog.value) {
    console.log(`Update ${JSON.stringify(blog)}.`);
    this.body = blog;
  } else {
    blog._id = _id;
    blog.create_at = new Date;
    yield blogs.insert(blog);
    console.log(`Create ${JSON.stringify(blog)} by update method.`);
    this.body = blog;
  }
}
function* D(_id) {
  const blog = yield blogs.findOneAndDelete({ _id });
  if (blog.value) {
    console.log(`Delete blog ${blog.value}.`);
    this.body = blog.value;
  } else {
    console.log(`Delete blog ${_id} failed.`);
    this.body = { err: 'No this blog' };
  }
}
function* partU(_id) {
  const subBlog = yield parse(this);
  const blog = yield blogs.findOneAndUpdate({ _id }, { $set: subBlog });
  if (blog.value) {
    console.log(`Partially update ${JSON.stringify(blog)}.`);
    this.body = blog.value;
  } else {
    console.log(`Partially update blog ${_id} failed.`);
    this.body = { err: 'No this blog' };
  }
}
function* listR() {
  console.log('Read all blogs.');
  this.body = yield blogs.find().toArray();
}

module.exports = {
  C,
  R,
  U,
  D,
  partU,
  listR,
  db,
};
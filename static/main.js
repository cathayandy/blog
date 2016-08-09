import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import BlogList from './components/blog-list.vue';
import Blog from './components/blog.vue';

Vue.use(VueRouter);

const router = new VueRouter();
router.map({
  '/': {
    component: BlogList,
    name: 'root'
  },
  '/blog-list': {
    component: BlogList,
    name: 'blog-list'
  },
  '/blog/:_id': {
    component: Blog,
    name: 'blog'
  },
});

router.start(App, '#app');

<template>
  <div>
    <h1 class="articles-header">JiaoJiaoLoveU</h1>
    <div class="row">
      <button class="three columns" @click="showAddArticle">Add new article</button>
      <input v-show="isAddArticleShow" placeholder="input title here..." type="text" class="six columns" v-model="title"></input>
    </div>
    <div v-show="isAddArticleShow">
      <textarea class="u-full-width" placeholder="input contents here..." v-model="content"></textarea>
      <div class="row">
        <button class="one-half column" @click="hideAddArticle">cancel</button>
        <button class="one-half column" @click="addNewArticle">submit</button>
      </div>
    </div>
    <div>
      <div class="docs-section" v-for="i in getBlogs" track-by="_id" v-link="{ name: 'blog', params: { _id: i._id } }">
        <i class="right fa fa-trash" @click.stop="deleteArticle(i)" aria-hidden="true"></i>
        <h6 class="docs-header">{{ i.title }}</h6>
        <p>{{ i.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as getters from '../getters.js';
import * as actions from '../actions.js';

export default {
  data () {
    return {
      isAddArticleShow: false,
      title: '',
      content: '',
    };
  },
  methods: {
    showAddArticle() {
      this.isAddArticleShow = true;
    },
    hideAddArticle() {
      this.isAddArticleShow = false;
    },
    addNewArticle() {
      const blog = {
        title: this.title,
        content: this.content,
      };
      this.blogC(blog);
    },
    deleteArticle(blog) {
      this.blogD(blog);
    }
  },
  vuex: {
    getters,
    actions,
  },
  route: {
    data(transition) {
      this.currentIdU(-1);
      this.blogListR();
      transition.next();
    },
  },
};
</script>

<style>
textarea {
  min-height: 200px;
}
.docs-section {
  border-top: 1px solid #eee;
  padding: 4rem 0;
  margin-bottom: 0;
}
.article-header {
  letter-spacing: .2rem;
  font-weight: 600;
}
.docs-header {
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-weight: 600;
}
.right {
  float: right;
}
</style>

<template>
  <div>
    <h1 class="articles-header">JiaoJiaoLoveU</h1>
    <div class="row">
      <button class="three columns" @click="toggleAddArticle">
        {{ isAddArticleShow ? 'Hide' : 'Add new article' }}
      </button>
      <input v-show="isAddArticleShow" placeholder="input title here..." type="text" class="six columns" v-model="title"></input>
    </div>
    <div v-show="isAddArticleShow" transition="edit">
      <div class="row">
        <textarea class="one-half column new" placeholder="input contents here..." v-model="content"></textarea>
        <div class="one-half column" v-html="content | marked"></div>
      </div>
      <div class="row">
        <button class="one-half column" @click="hideAddArticle">cancel</button>
        <button class="one-half column" @click="addNewArticle">submit</button>
      </div>
    </div>
    <div>
      <div
        class="docs-section"
        v-for="i in getBlogs"
        transition="item"
        track-by="_id"
        v-link="{ name: 'blog', params: { _id: i._id } }"
        @mouseover="onEnterArticle(i._id)"
        @mouseout="onLeaveArticle(i._id)"
      >
        <i v-show="i._id === currentCursor" class="right fa fa-trash" @click.stop="deleteArticle(i)" aria-hidden="true"></i>
        <h6
          @click.stop
          @dblclick.stop="editArticleTitle(i)"
          class="docs-header"
          v-show="i._id !== currentEditTitle"
        >
          {{ i.title }}
        </h6>
        <input
          @click.stop
          @blur="doneEditArticleTitle(i)"
          @keyup.enter="doneEditArticleTitle(i)"
          @keyup.esc="cancelEditArticleTitle"
          class="docs-header"
          v-show="i._id === currentEditTitle"
          v-model="titleDraft"
        >
        </input>
        <div v-show="i._id !== currentEditContent" @click.stop @dblclick.stop="editArticleContent(i)" v-html="i.content | marked"></div>
        <div
          @click.stop
          @blur="doneEditArticleContent(i)"
          @keyup.enter="onContentEnterUp(i, $event)"
          @keyup.esc="cancelEditArticleContent"
          v-show="i._id === currentEditContent"
          class="row content-draft"
        >
          <textarea class="one-half column draft" v-model="contentDraft"></textarea>
          <div class="one-half column" v-html="contentDraft | marked"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as getters from '../getters.js';
import * as actions from '../actions.js';
import marked from 'marked';

export default {
  data () {
    return {
      isAddArticleShow: false,
      title: '',
      content: '',
      titleDraft: '',
      contentDraft: '',
      currentCursor: '',
      currentEditTitle: '',
      currentEditContent: '',
    };
  },
  methods: {
    onContentEnterUp(blog, event) {
      if (event.ctrlKey) {
        this.doneEditArticleContent(blog);
      }
    },
    editArticleTitle(blog) {
      this.titleDraft = blog.title;
      this.currentEditTitle = blog._id;
    },
    doneEditArticleTitle(blog) {
      this.titleU(blog._id, this.titleDraft);
      this.currentEditTitle = '';
    },
    cancelEditArticleTitle() {
      this.currentEditTitle = '';
    },
    editArticleContent(blog) {
      this.contentDraft = blog.content;
      this.currentEditContent = blog._id;
    },
    doneEditArticleContent(blog) {
      this.contentU(blog._id, this.contentDraft);
      this.currentEditContent = '';
    },
    cancelEditArticleContent() {
      this.currentEditContent = '';
    },
    onEnterArticle(id) {
      this.currentCursor = id;
    },
    onLeaveArticle(id) {
      if (this.currentCursor === id)
        this.currentCursor = '';
    },
    toggleAddArticle() {
      this.isAddArticleShow = !this.isAddArticleShow;
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
    },
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
  filters: {
    marked
  },
};
</script>

<style scoped>
.content-draft {
  min-height: 300px;
}
textarea.draft {
  min-height: 300px;
}
textarea.new {
  min-height: 400px;
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
.docs-section:hover {
  cursor: pointer;
}

.edit-transition {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  display: block;
  overflow: hidden;
  height: 500px;
}
.edit-enter {
  height: 0;
}
.edit-leave {
  height: 0;
}

.item-transition {
  border-top: 1px solid #eee;
  padding: 4rem 0;
  margin-bottom: 0;
}
.item-enter {
  opacity: 0;
}
.item-leave {
  opacity: 0;
  position: absolute;
}
.item-move {
  transition: transform .5s cubic-bezier(.55,0,.1,1);
}
</style>

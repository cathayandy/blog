const state = {
  all: [{
    title: 'title',
    content: 'content',
    id: '1',
  }],
  currentId: -1,
};

const mutations = {
  titleU(state, id, title) {
    const blog = state.all.find((blog) => blog.id === id);
    if (blog) {
      blog.title = title;
    }
  },
  contentU(state, id, content) {
    const blog = state.all.find((blog) => blog.id === id);
    if (blog) {
      blog.content = content;
    }
  },
  blogU(state, blog) {
    const oldBlog = state.all.find((b) => b.id === blog.id);
    if (oldBlog) {
      Object.assign(oldBlog, blog);
    }
  },
  blogC(state, blog) {
    const oldBlog = state.all.find((b) => b.id === blog.id);
    if (!oldBlog) {
      state.all.push(blog);
    }
  },
  blogD(state, blog) {
    const blogIndex = state.all.findIndex((b) => b.id === blog.id);
    if (blogIndex >= 0) {
      state.all.splice(blogIndex, 1);
    }
  },
  currentIdU(state, id) {
    state.currentId = id;
  },
};

export default {
  state,
  mutations,
};
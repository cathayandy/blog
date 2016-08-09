const state = {
  all: [{
    title: 'title',
    content: 'content',
    _id: 'exampleid',
    create_at: 'sometime',
  }],
  currentId: -1,
};

const mutations = {
  titleU(state, _id, title) {
    const blog = state.all.find((blog) => blog._id === _id);
    if (blog) {
      blog.title = title;
    }
  },
  contentU(state, _id, content) {
    const blog = state.all.find((blog) => blog._id === _id);
    if (blog) {
      blog.content = content;
    }
  },
  blogU(state, blog) {
    const oldBlogIndex = state.all.findIndex((b) => b._id === blog._id);
    if (oldBlogIndex >= 0) {
      state.all.splice(oldBlogIndex, 1, blog);
    } else {
      state.all.push(blog);
    }
  },
  blogC(state, blog) {
    const oldBlog = state.all.find((b) => b._id === blog._id);
    if (!oldBlog) {
      state.all.push(blog);
    }
  },
  blogD(state, blog) {
    const blogIndex = state.all.findIndex((b) => b._id === blog._id);
    if (blogIndex >= 0) {
      state.all.splice(blogIndex, 1);
    }
  },
  blogListU(state, blogs) {
    state.all = blogs;
  },
  currentIdU(state, _id) {
    state.currentId = _id;
  },
};

export default {
  state,
  mutations,
};
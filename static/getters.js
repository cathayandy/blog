export const getBlogNum = (state) => state.blogs.all.length;
export const getBlogs = (state) => state.blogs.all;
export const getTitle = (state) => state.blogs.all.find((blog) => blog._id === state.blogs.currentId).title;
export const getContent = (state) => state.blogs.all.find((blog) => blog._id === state.blogs.currentId).content;
export const getId = (state) => state.blogs.currentId;
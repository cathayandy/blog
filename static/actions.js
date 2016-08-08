export const blogU = ({ dispatch }, blog) => {
  dispatch('blogU', blog);
};
export const blogC = ({ dispatch }, blog) => {
  dispatch('blogC', blog);
};
export const blogD = ({ dispatch }, blog) => {
  dispatch('blogD', blog);
};
export const titleU = ({ dispatch }, id, title) => {
  dispatch('titleU', id, title);
};
export const contentU = ({ dispatch }, id, content) => {
  dispatch('contentU', id, content);
};
export const currentIdU = ({ dispatch }, id) => {
  dispatch('currentIdU', id);
};
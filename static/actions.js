import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export const blogC = ({ dispatch }, blog) => {
  Vue.http.post('/blogs', blog).then(({ data }) => {
    dispatch('blogC', data);
  });
};
export const blogR = ({ dispatch }, blog) => {
  Vue.http.get(`/blogs/${blog._id}`).then(({ data }) => {
    if (data.err) {
      console.log(data.err);
      return;
    }
    dispatch('blogU', data);
  });
};
export const blogU = ({ dispatch }, blog) => {
  Vue.http.put(`/blogs/${blog._id}`, blog).then(({ data }) => {
    dispatch('blogU', data);
  });
};
export const blogD = ({ dispatch }, blog) => {
  Vue.http.delete(`/blogs/${blog._id}`).then(({ data }) => {
    if (data.err) {
      console.log(data.err);
      return;
    }
    dispatch('blogD', data);
  });
};
export const titleU = ({ dispatch }, _id, title) => {
  Vue.http.patch(`/blogs/${blog._id}`, { title }).then(({ data }) => {
    if (data.err) {
      console.log(data.err);
      return;
    }
    dispatch('titleU', _id, title);
  });
};
export const contentU = ({ dispatch }, _id, content) => {
  Vue.http.patch(`/blogs/${blog._id}`, { content }).then(({ data }) => {
    if (data.err) {
      console.log(data.err);
      return;
    }
    dispatch('contentU', _id, content);
  });
};
export const blogListR = ({ dispatch }) => {
  Vue.http.get('/blogs').then(({ data }) => {
    dispatch('blogListU', data);
  });
};
export const currentIdU = ({ dispatch }, _id) => {
  dispatch('currentIdU', _id);
};
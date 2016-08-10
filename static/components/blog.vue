<template>
  <div class="docs-section">
    <h3 class="docs-header">{{ getTitle }}</h3>
    <div v-html="getContent || '' | marked"></div>
  </div>
  <div class="docs-section">
    <a v-link="{ name: 'blog-list' }">Back to list</a>
  </div>
</template>

<script>
import * as getters from '../getters.js';
import * as actions from '../actions.js';
import marked from 'marked';

export default {
  data () {
    return {
    };
  },
  methods: {
  },
  vuex: {
    getters,
    actions,
  },
  route: {
    data({ next, to: { params: { _id } } }) {
      this.blogR({ _id });
      this.currentIdU(_id);
    },
  },
  computed: {
  },
  filters: {
    marked
  },
};
</script>

<style scoped>
.docs-section {
  border-top: 1px solid #eee;
  padding: 4rem 0;
  margin-bottom: 0;
}
.docs-header {
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-weight: 600;
}
</style>

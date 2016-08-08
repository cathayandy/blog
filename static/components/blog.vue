<template>
  <div class="docs-section">
    <h3 class="docs-header">{{ getTitle }}</h3>
    <p>{{ getContent }}</p>
  </div>
  <div class="docs-section">
    <a v-link="{ name: 'blog-list' }">Back to list</a>
  </div>
</template>

<script>
import * as getters from '../getters.js';
import * as actions from '../actions.js';

export default {
  data () {
    return {
      id: '',
    };
  },
  methods: {
  },
  vuex: {
    getters,
    actions,
  },
  route: {
    data({ next, to: { params: { id } } }) {
      this.currentIdU(id);
      next({
        id: id,
      });
    },
  },
  computed: {
  },
};
</script>

<style>
</style>

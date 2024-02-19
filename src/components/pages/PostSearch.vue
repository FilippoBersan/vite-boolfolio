<script>
import store from '../../store';
export default {
  name: 'PostSearch',
  data() {
    return {
      store,
    };
  },
  emits: ['searchPost'],
  methods: {
    search() {
      console.log('sto cercando');
      this.$emit('searchPost');
    },
  },
};
</script>

<template>
  <section id="post-search">
    <form action="" @submit.prevent="search">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="search-key"
          placeholder="Cerca nei progetti"
          v-model="store.posts.searchKey"
        />
        <label for="floatingInput">Cerca nei progetti</label>
      </div>
      <button class="btn btn-primary">Cerca</button>
    </form>
  </section>
</template>

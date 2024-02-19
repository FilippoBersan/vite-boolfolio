<script>
import store from '../../store';
export default {
  name: 'PostSearch',
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="search-key"
        placeholder="Cerca nei progetti"
        v-model="store.posts.searchKey"
      />
      <label for="floatingInput">Cerca nei progetti</label>
    </div>
    <button class="btn btn-primary">Cerca</button>
  </section>
</template>

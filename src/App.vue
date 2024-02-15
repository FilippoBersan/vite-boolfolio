<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'Boolfolio',
  data() {
    return {
      posts: [],
      baseUrl: 'http://127.0.0.1:8001',
      apiUrls: {
        posts: '/api/posts',
      },
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },
  methods: {
    getPosts() {
      axios
        .get(this.baseUrl + this.apiUrls.posts)
        .then((response) => {
          console.log(response);
          this.posts = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain :posts="posts" />
  <AppFooter />
</template>

<style scoped></style>

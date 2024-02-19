import { reactive } from 'vue';

const store = reactive({
  api: {
    baseUrl: 'http://127.0.0.1:8001',
    apiUrls: {
      posts: '/api/posts',
    },
  },
  posts: {
    // searchKey: null,
  },
});

export default store;

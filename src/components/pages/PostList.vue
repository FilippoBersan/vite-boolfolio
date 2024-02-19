<script>
import axios from 'axios';
import PostSearch from './PostSearch.vue';
export default {
  name: 'PostList',
  data() {
    return {
      currentPage: 1,
      responseData: {},
      posts: [],
      baseUrl: 'http://127.0.0.1:8001',
      apiUrls: {
        posts: '/api/posts',
      },
    };
  },
  components: {
    PostSearch,
  },
  methods: {
    getPosts() {
      axios
        .get(this.baseUrl + this.apiUrls.posts, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextPage() {
      console.log('next');
      this.currentPage++;
      this.getPosts();
    },
    prevPage() {
      console.log('prev');
      this.currentPage--;
      this.getPosts();
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<template>
  <div class="text-center">
    <h1>Projects-Page</h1>
  </div>
  <div class="container py-4">
    <h1>I nostri Projects</h1>
    <PostSearch></PostSearch>
    <div class="row mt-4">
      <div class="col col-md-4 g-4" v-for="post in responseData.results?.data">
        <div class="card">
          <!-- <img src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">
              {{ post.content }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <nav class="my-5">
      <ul class="d-flex justify-content-between list-unstyled">
        <li
          class="btn btn-primary"
          @click="prevPage"
          v-show="responseData.results?.prev_page_url"
        >
          Previous
        </li>
        <li
          class="btn btn-secondary"
          @click="nextPage"
          v-show="responseData.results?.first_page_url"
        >
          Next
        </li>
      </ul>
    </nav>
  </div>
</template>

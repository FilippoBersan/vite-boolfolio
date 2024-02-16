<script>
import axios from 'axios';
export default {
  name: 'PostList',
  data() {
    return {
      currentPage: 1,
      posts: [],
      baseUrl: 'http://127.0.0.1:8001',
      apiUrls: {
        posts: '/api/posts',
      },
    };
  },
  methods: {
    getPosts() {
      axios
        .get(this.baseUrl + this.apiUrls.posts)
        .then((response) => {
          console.log(response);
          this.posts = response.data.results.data;
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
  <div class="text-center">
    <h1>Projects-Page</h1>
  </div>
  <div class="container py-4">
    <h1>I nostri Projects</h1>
    <div class="row mt-4">
      <div class="col col-md-4 g-4" v-for="post in posts">
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
  </div>
</template>

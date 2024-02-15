<script>
export default {
  name: 'Card',
  props: ['posts'],
};
</script>

<template>
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

<style scoped></style>

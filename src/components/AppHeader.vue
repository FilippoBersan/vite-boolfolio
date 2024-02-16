<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header class="bg-info">
    <div class="container d-flex justify-content-between py-3">
      <div>logo</div>
      <nav>
        <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'posts' }">Blog</router-link></li>
          <li><router-link :to="{ name: 'about' }">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>

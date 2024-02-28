<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="sticky-top wrapper">
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
    <!-- <HelloWorld msg="You did it!" /> -->
    <nav class="navbar navbar-dark bg-dakr">
      <a class="navbar-brand" href="#">
        <img src="" width="30" height="30" class="d-inline-block align-top" alt="" />
        JOBSHOPER
      </a>
      <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    </nav>
    <!-- </div> -->
  </header>
</div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  /* padding: 0 1rem; */
  /* border-left: 1px solid var(--color-border); */
}

a:visited, a:active {
  color: white;
  text-decoration: none;
}

.links > * {
  font-size: small;
  font-weight: bold;
  display: inline-block;
  padding-left: 0.5rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .links > * {
  font-size: medium;
  font-weight: bold;
  display: inline-block;
  padding-left: 4rem;
}
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

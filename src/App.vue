<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sticky-top wrapper">
  <header>
 
    <nav class="navbar navbar-dark bg-dakr" style="background-color: #222529;">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
        JJOBSHOPER
      </a>
      <div class="links">
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/about">Projects</RouterLink>
    </div>
    </nav>
  </header>
</div>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

/* nav a.router-link-exact-active {
  color: white;
} */

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
</style>

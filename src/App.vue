<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sticky-top wrapper">
    <header>
      <nav class="navbar navbar-dark bg-dakr" style="background-color: #222529">
        <a class="navbar-brand" href="#">
          <img
            src="./assets/logo.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          JJOBSHOPER
        </a>
        <div class="links">
          <RouterLink to="/">About</RouterLink>
          <RouterLink to="/about">Projects</RouterLink>
        </div>
      </nav>
    </header>
  </div>
  <div class="fixed-bottom bg-dark pt-2 pb-2 d-flex justify-content-center justify-content-lg-end">
    <footer>
      <a class="btn btn-primary footer_icon" href="https://github.com/jkimdev" role="button"
        ><img src="../src/components/icons/github.svg" alt="" style="height: 1.5rem" />
      </a>
      <a
        class="btn btn-primary footer_icon"
        href="https://www.notion.so/jkimdev/3-0e76e6fbd5b647c2806bdf888cf8b6f3?pvs=4"
        role="button"
        ><img src="../src/components/icons/notion.svg" alt="" style="height: 1.5rem" />
      </a>
    </footer>
  </div>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
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

a:visited,
a:active {
  color: white;
  text-decoration: none;
}

.btn:hover,
.btn:active,
.btn:focus {
  background: unset;
  color: unset;
}

.footer_icon {
  background-color: transparent;
  border: none;
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

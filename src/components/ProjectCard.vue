<script setup></script>
<template>
  <div class="container pt-4">
    <div class="card">
      <slot class="project-image" name="image"> </slot>
      <div class="card-body">
        <h5 class="card-title">
          <slot name="card-title"></slot>
        </h5>
        <p class="card-text">
          <slot name="card-text"> </slot>
        </p>
        <a href="#" class="card-link">Learn more →</a>
      </div>
    </div>
  </div>
</template>

<style>
a, a:visited {
    text-decoration: none;
    color: white
}
</style>


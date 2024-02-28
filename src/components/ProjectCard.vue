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
        <Button type="button" class="btn btn-primary">Learn more →</Button>
      </div>
    </div>
  </div>
</template>

<style>
.btn {
    text-decoration: none;
    background-color: #63429F;
    border-color: #63429F;
}
</style>


<script setup></script>

<template>
  <div class="container pt-4">
    <div class="about-title">
      <h1 class="font-weight-bold">About</h1>
      <p>
        Educators are developing innovative technologies to provide more effective education to a
        greater number of students.
      </p>
      <div class="border-top pb-4"></div>
    </div>
    <div class="about-content pb-4">
      <img class="img-fluid rounded mx-auto d-block about-img" src="../assets/images/about.svg" />
      <span>
        <p class="about-text">
          The domestic private education market is extraordinarily mature and massive, unlike
          anywhere else in the world. Academy directors possess dual identities: as educators who
          observe students daily and as entrepreneurs who study and ponder daily for survival.
          Recognizing that private education has become indispensable domestically, they acknowledge
          it as an industry, supplying technologies through academies to provide more effective
          education at lower prices.
        </p></span
      >
    </div>
    <div class="border-top pb-4"></div>
    <div class="contributors" style="padding-bottom: 1rem;">
      <h1 class="font-weight-bold">Contributors</h1>
      <img class="img-fluid rounded" src="../assets/images/contributors.jpg" alt="" />
    </div>
  </div>
</template>

<style>
.about-img {
  width: 10rem;
  height: 10rem;
}

.about-text {
  display: inline-block;
  padding-top: 1rem;
}

@media (min-width: 1024px) {
  .about-content {
    display: flex;
    align-items: top;
  }
  .about-text {
    padding-left: 1rem;
    padding-top: 0;
  }
}
</style>

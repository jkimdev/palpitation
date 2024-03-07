<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCategoryStore } from '@/stores/categories.js'

const store = useCategoryStore()

const { categories, currentTab, products } = storeToRefs(store)
const { fetchCategories, changeTab, fetchProductBy } = store

onMounted(() => {
  fetchCategories()
  fetchProductBy('electronics')
})
</script>
<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
    <div class="col">
      <ProjectCard>
        <template #image>
          <img
            src=".././assets/images/mining.jpg"
            class="card-img-top"
            alt="..."
            style="height: 10rem"
          />
        </template>
        <template #card-title>Quantum Harmony</template>
        <template #card-text>
          <ul>
            <li>[2023.07] Developing a next-generation AI algorithm to optimize quantum computing architectures.</li>
            <li>[2023.07] Crafting a unique interface for seamless integration between quantum computers and traditional systems.</li>
          </ul>
        </template>
      </ProjectCard>
    </div>
    <div class="col">
      <ProjectCard>
        <template #image>
          <img
            src=".././assets/images/brain.jpg"
            class="card-img-top"
            alt="..."
            style="height: 10rem"
          />
        </template>
        <template #card-title>Echo Nebula</template>
        <template #card-text>
          <ul>
            <li>[2023.07] A groundbreaking platform for immersive auditory experiences using 3D spatial audio technology.</li>
            <li>[2023.07] Collaborating with artists and scientists to explore the outer limits of sound in virtual environments.</li>
          </ul>
        </template>
      </ProjectCard>
    </div>
    <div class="col">
      <ProjectCard>
        <template #image>
          <img
            src=".././assets/images/test.jpg"
            class="card-img-top"
            alt="..."
            style="height: 10rem"
          />
        </template>
        <template #card-title>Green Catalyst</template>
        <template #card-text>
          <ul>
            <li>[2023.07] Revolutionizing urban agriculture through the use of nanotechnology-enhanced soil substitutes.</li>
            <li>[2023.07] Implementing a sustainable, community-driven model for food production in urban settings.</li>
          </ul>
        </template>
      </ProjectCard>
    </div>
  </div>

  <div class="about-title pt-4">
    <h1 class="font-weight-bold">Shop</h1>
    <p>Where your wallet loses weight, but your closet gains it!</p>
    <div class="border-top pb-4"></div>
  </div>
  <nav>
    <div class="nav nav-pills pb-4" id="nav-tab" role="tablist">
      <li class="nav-item" v-for="item in categories" v-bind:key="item">
        <button @click="changeTab(item)" class="nav-link" :class="{ active: currentTab === item }">
          {{ item }}
        </button>
      </li>
    </div>
  </nav>
  <div class="tab-content">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div v-for="product in products" v-bind:key="product.id">
        <div class="col product-col" style="width: 15rem">
          <img :src="product.image" class="img-fluid" alt="..." style="width: 15rem; height: 15rem;"/>
          <div class="product-detail pt-2">
          <div style="font-size: 1rcap;">{{ product.title }}</div>
          <div style="font-size: 1.5rcap; font-weight: bolder; text-align: right;">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
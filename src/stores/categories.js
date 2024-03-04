import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchCategoryRequest, fetchProductRequest } from '@/utils/fakeStoreAPI'

export const useCategoryStore = defineStore('categories', () => {
  const products = ref([])
  const currentTab = ref('electronics')
  const categories = ref([])
  async function fetchCategories() {
    categories.value = await fetchCategoryRequest()
  }
  function changeTab(category) {
    currentTab.value = category
    fetchProductBy(currentTab.value)
  }
  async function fetchProductBy(category) {
    products.value = await fetchProductRequest(category)
    console.log(products.value)
  }

  return { products, categories, currentTab, changeTab, fetchCategories, fetchProductBy }
})

import { axiosClient } from '@/utils/APIClient'

export const fetchCategoryRequest = async () => {
  try {
    const data = await axiosClient.get('/products/categories')
    return data.data
  } catch (err) {
    return console.error(err)
  }
}

export const fetchProductRequest = async (category) => {
  try {
    const data = await axiosClient.get(`/products/category/${category}`)
    return data.data
  } catch (err) {
    return console.error(err)
  }
}

export const fakeStoreAPI = { fetchCategoryRequest, fetchProductRequest }

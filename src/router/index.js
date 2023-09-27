import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'productPage',
      component: ProductsPage
    },
    {
      path: '/products/:id',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cartPage',
      component: () => import('../views/CartPage.vue')
    },
    {
      path: '/',
      redirect: '/products'
    }
  ]
})

export default router

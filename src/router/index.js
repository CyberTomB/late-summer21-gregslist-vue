import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import Cars from '../pages/Cars.vue'


const routes = [
  {
    path: '/',
    name: 'Cars',
    component: Cars
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

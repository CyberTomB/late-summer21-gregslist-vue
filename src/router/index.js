import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import Cars from '../pages/Cars.vue'
import Home from '../pages/Home.vue'
import Jobs from '../pages/Jobs.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/cars',
    name: 'Cars',
    component: Cars
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },{
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

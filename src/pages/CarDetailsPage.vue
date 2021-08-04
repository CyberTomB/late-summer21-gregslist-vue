<template>
  <div class="container-fluid car-details-page">
    <div class="row text-center">
      <div class="col-md-12">
        <img :src="car.imgUrl" class="img-fluid car-img" :alt="car.make + car.model + 'image'">
        <div class="p-3">
          <h2>{{car.make}} - {{car.model}} - {{car.year}}</h2>
        <p>{{car.description}}</p>
        <h3><em>{{car.price}}</em></h3>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await carsService.getCarById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      car: computed(()=> AppState.activeCar),
      async destroy(){
        try {
          await carsService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'Cars'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>
.car-img{
  max-height: 45vh;
}
</style>
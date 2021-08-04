<template>
  <div class="container-fluid car-details-page">
    <div class="row justify-content-start align-items-center" style="height: 100%">
      <div class="col-md-12 text-center">
        <img :src="car.imgUrl" class="img-fluid float-left" :alt="car.make + car.model + 'image'">
        <h2>{{car.make}} - {{car.model}} - {{car.year}}</h2>
        <p>{{car.description}}</p>
        <h3><em>{{car.price.toLocaleString("en-US", {style: 'currency', currency: 'USD'})}}</em></h3>
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

</style>
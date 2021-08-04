<template>
  <div class="container-fluid job-details-page">
    <div class="row text-center">
      <div class="col-md-12 d-flex justify-content-center">
        <div class="card w-50">
        <div class="card-body">
          <div class="card-title text-center">
            <p><b>{{job.jobTitle}}</b></p>
          </div>
            <p class="small">{{job.company}}</p>
            <p>{{job.description}}</p>
            <p><em>${{job.rate}} per hour, {{job.hours}} hours a week</em></p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { jobsService } from "../services/JobsService"
import { AppState } from "../AppState"
export default {
  setup(){
    const route = useRoute()
    onMounted(async()=>{
      try {
        await jobsService.getJobById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      job: computed(()=> AppState.activeJob),
    }
  }
}
</script>
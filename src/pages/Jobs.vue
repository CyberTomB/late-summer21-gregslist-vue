<template>
  <div class="jobs container-fluid">
    <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core"
import { AppState } from "../AppState"
import { jobsService } from '../services/JobsService'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'

export default {
  name: 'Jobs',
  setup(){
    onMounted(async ()=>{
      try{
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      jobs: computed(()=> AppState.jobs)
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>
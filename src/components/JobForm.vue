<template>
  <div class="row" id="jobs-form">
            <div class="col text-center">
                <form class="d-flex justify-content-center" @submit.prevent="createJob">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" name="title" 
                        v-model="state.newJob.jobTitle"
                        id="title" class="form-control" placeholder="Title..." required>
                    </div>
                    <div class="form-group position-relative">
                        <label for="description">Description</label>
                        <input type="text" name="description"
                        v-model="state.newJob.description"
                         id="description" class="form-control"
                            placeholder="Description..." maxlength="500">
                    </div>
                    <div class="form-group">
                        <label for="rate">Pay</label>
                        <input type="number" name="rate"
                        v-model="state.newJob.rate"
                         id="rate" class="form-control" placeholder="Pay..." required
                            min="8">
                    </div>
                    <div class="form-group">
                        <label for="payType">Hours</label>
                        <input type="text" name="payType"
                        v-model="state.newJob.hours"
                         id="payType" class="form-control"
                            placeholder="Hours per week..." required>
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" name="company"
                        v-model="state.newJob.company"
                         id="company" class="form-control"
                            placeholder="123 Business Inc...">
                    </div>
                    <div class="d-flex align-items-center" style="margin-top: 16px;">
                        <button type="submit" class="btn btn-outline-success">Add</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
import { useRouter } from "vue-router"
import { jobsService } from '../services/JobsService'
import { reactive } from '@vue/reactivity'
export default {
  setup(){
    const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    return {
      state,
      async createJob(){
        try {
        const newId = await jobsService.createJob(state.newJob)
        state.newJob = {}
        router.push({name: 'JobDetails', params: {id: newId}})
      } catch (error) {
        console.error(error)
      }
    }
  }
}
}
</script>
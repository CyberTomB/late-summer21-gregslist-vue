<template>
      <div class="card my-1 shadow">
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <div class="card-body text-center">
          <div class="card-title ">
            <h3><b>{{job.jobTitle}}</b></h3>
          </div>
            <h4>{{job.company}}</h4>
        </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    job: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>
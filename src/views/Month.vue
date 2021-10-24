<template>
  <div class="container">
    <page-card :name="monthData.name"
    :consAll="monthData.all"/>
    month
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Month',
  // components: {
  //   PageCard
  // },
  setup() {
    const store = useStore(),
      state = store.state
    getAllData(store)
    onMounted(() => {})

    return {
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style></style>
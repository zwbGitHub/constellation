<template>
  <div class="container">
    <page-card :name="yearData.name"
    :consAll="yearData.all"/>
    year
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Year',
  // components: {
  //   PageCard
  // },
  setup() {
    const store = useStore(),
      state = store.state
    getAllData(store)
    onMounted(() => {})

    return {
      yearData: computed(() => state.year)
    }
  }
}
</script>

<style></style>
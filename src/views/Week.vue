<template>
  <div class="container">
    <page-card :name="weekData.name"
    :consAll="weekData.all"/>
    week
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Week',
  // components: {
  //   PageCard
  // },
  setup() {
    const store = useStore(),
      state = store.state
    getAllData(store)
    onMounted(() => {})

    return {
      weekData: computed(() => state.week)
    }
  }
}
</script>

<style></style>
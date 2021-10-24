<template>
  <div class="container">
    <page-card :name="monthData.name" :consAll="monthData.all" />
    <page-list :monthData="monthData" />
  </div>
</template>

<script>
// import PageCard from '@/components/Common/Card'
import PageList from '../components/PageList/Month.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import getAllData from '../service/index'
export default {
  name: 'Month',
  components: {
    // PageCard,
    PageList
  },
  setup() {
    const store = useStore(),
      state = store.state
    
    onMounted(() => {
      getAllData(store)
    })

    return {
      monthData: computed(() => state.month)
    }
  }
}
</script>

<style></style>
